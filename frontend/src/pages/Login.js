import "../styles/Login.css";
import Header from "../components/Login/Header";
import Box from "../components/Login/Box";
import Logo from "../components/Login/Logo";

import styled from "styled-components";

const StyledDiv = styled.div`
  background: linear-gradient(
    162.02deg,
    #9fe8ff 1.89%,
    rgba(209, 242, 253, 0.78) 69.18%
  );

  font-family: "Nunito", sans-serif;
  height: 100vh;
`;

function Login() {
  return (
    <StyledDiv>
      <Header />
      <Box />
      <Logo />
    </StyledDiv>
  );
}

export default Login;
