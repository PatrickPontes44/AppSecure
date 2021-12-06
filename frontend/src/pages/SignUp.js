import Box from '../components/SignUp/Box.js';
import Header from '../components/Login/Header';
import styled from 'styled-components';
import Logo from "../components/Login/Logo";

const Div = styled.div`
    width: 100%;
    min-height: 100vh;Z
`;

const Section = styled.section`
@media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 5vh;
}`;

const Main = styled.main``;

function SignUp() {
    return(
        <Div>
            <Header />
            <Main>
                <Section>
                    <Box />
                    <Logo />
                </Section>
            </Main>
        </Div>
    )
}

export default SignUp;