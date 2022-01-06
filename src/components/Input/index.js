import { useState } from "react"

import styled from 'styled-components';
const Title = styled.h1``;
const Paragraph = styled.p``;
const Input = styled.input``;


const InputSearch = () => {
    const [data, setDados] = useState();

    const mouseLeave = (event) => {
        event.preventDefault()
        var cepActually = document.getElementById("cepValue").value

        if(cepActually === ''){
            // alert("Campo vazio. Insira um Cep válido.")
            return ''
        }

        fetch(`https://viacep.com.br/ws/${cepActually}/json/`)
            .then(resposta => resposta.json())
            .then(json => setDados(json))
            .catch(error => {
                console.log(error)
            })

        console.log(data)
    }

    return (
        <>
            <Title>Busca CEP</Title>
            <Paragraph>Digite um CEP:</Paragraph>
            <Input type="text" placeholder="0000-0000" onMouseLeave={mouseLeave} id="cepValue" />
            {data && (
                <ul>
                    <li>
                        {data.cep}
                    </li>
                    <li>
                        {data.logradouro}
                    </li>
                    <li>
                        {data.bairro}
                    </li>
                    <li>
                        {data.localidade}
                    </li>
                    <li>
                        {data.uf}
                    </li>
                </ul>
            )}
        </>
    )
}


export default InputSearch;