import styled from "styled-components";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const H1 = styled.h1`
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

const Highlight = styled.span`
  color: #ff5678;
`;

function LoginHeader() {
  return (
    <div>
      <Header>
        <H1>
          App <Highlight className="highlight">Secure</Highlight>
        </H1>

        <MobileNav href="#" id="mobile-nav" icon="fa fa-bars" />

        <DesktopNav href="#" id="desktop-nav" text="Sobre Nós" />
      </Header>
    </div>
  );
}

export default LoginHeader;
