import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const StyledH1 = styled.h1`
  margin: 19px 0 0 43px;
  font-size: 24px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }

  @media screen and (min-width: 1800px) {
    font-size: 80px;
  }

  @media screen and (min-width: 2650px) {
    font-size: 115px;
  }

  @media screen and (min-width: 3500px) {
    font-size: 150px;
  }
`;

const StyledSpan = styled.span`
  color: #ff5678;
`;

function LoginHeader() {
  return (
    <div>
      <StyledHeader>
        <StyledH1>
          App <StyledSpan className="highlight">Secure</StyledSpan>
        </StyledH1>

        <MobileNav href="#" id="mobile-nav" icon="fa fa-bars" />

        <DesktopNav href="#" id="desktop-nav" text="Sobre Nós" />
      </StyledHeader>
    </div>
  );
}

export default LoginHeader;
