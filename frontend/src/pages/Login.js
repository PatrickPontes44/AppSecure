import Header from "../components/Login/Header";
import Box from "../components/Login/Box";
import Logo from "../components/Login/Logo";

import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  min-height: 100vh;
  }
`;

const Main = styled.main ``;
const Section = styled.section ``;

function Login() {
  return (
    <Div>
      <Header />
      <Main>
        <Section>
          <Box />
          <Logo />
        </Section>
      </Main>
    </Div>
  );
}

export default Login;
