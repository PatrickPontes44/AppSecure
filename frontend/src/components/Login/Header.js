import styled from "styled-components";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media screen and (min-width: 1305px) {
    margin-bottom: 80px;
  }

  @media screen and (min-width: 1305px) {
    margin-bottom: 80px;
  }

  @media screen and (min-width: 3765px) {
    margin-bottom: 180px;
  }
`;

const H1 = styled.h1`
  margin: 19px 0 0 43px;
  font-size: 2.4rem;

  @media screen and (min-width: 1305px) {
    font-size: 4rem;
  }

  @media screen and (min-width: 1800px) {
    font-size: 8rem;
  }

  @media screen and (min-width: 2650px) {
    font-size: 11.5rem;
  }

  @media screen and (min-width: 3765px) {
    font-size: 15rem;
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
