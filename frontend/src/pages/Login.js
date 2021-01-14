import Header from "../components/Login/Header";
import Box from "../components/Login/Box";
import Logo from "../components/Login/Logo";

import styled from "styled-components";

const Div = styled.div`
  background: linear-gradient(
    162.02deg,
    #9fe8ff 1.89%,
    rgba(209, 242, 253, 0.78) 69.18%
  );

  font-family: "Nunito", sans-serif;
  height: 125h;

  @media screen and (min-width: 1305px) {
    height: 100vh;
  }
`;

function Login() {
  return (
    <Div>
      <Header />
      <Box />
      <Logo />
    </Div>
  );
}

export default Login;
