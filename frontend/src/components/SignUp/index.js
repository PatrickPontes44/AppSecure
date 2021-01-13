import SignUpSection from './SignUpSection.js';
import Header from '../Login/Header';
import styled from 'styled-components';

const StyledSignUp = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background: linear-gradient(
        162.02deg,
        #9fe8ff 1.89%,
        rgba(209, 242, 253, 0.78) 69.18%);
`

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 10px;

    > .logo {
        display: none;
    }

    @media (min-width: 770px) {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: 1fr 1fr;
        justify-items: center;

        .logo {
            display: block;
            width: 100%;
            grid: 2 / 3;
        }
    }
`

function SignUp() {
    return(
        <StyledSignUp>
            <Header />

            <Main>
                <SignUpSection />
                <img className='logo' src='../../assets/logo-desktop.png' alt='Logo' />
            </Main>
        </StyledSignUp>
    )
}

export default SignUp;