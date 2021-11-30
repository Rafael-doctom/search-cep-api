import { useEffect, useState } from "react"

const InputSearch = () => {
    const [data, setDados] = useState();

    const mouseClose = (event) => {
        event.preventDefault()
        var cepActually = document.getElementById("cepValue").value


        fetch(`https://viacep.com.br/ws/${cepActually}/json/`)
            .then(resposta => resposta.json())
            .then(json => setDados(json))
            .catch(error => {
                alert("endereço inválido!")
            })

        console.log(data)
    }

  




    return (
        <>
            <h3>Digite um CEP válido 😎 </h3>
            <input type="text" placeholder="0000-0000" onMouseLeave={mouseClose} id="cepValue" />
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