import { InputSearch } from '../../components/index';

// importStyles
import styled from  'styled-components';
const Container = styled.div`
    widht:100%
`;
const Content = styled.div`
    margin: auto;
    width:50vw;
`;

const Dashboard = () => {

    return (
        <>
            <Container>
                <Content>
                    <InputSearch />
                </Content>
            </Container>
        </>
    )
}

export default Dashboard