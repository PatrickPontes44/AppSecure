import styled from "styled-components";

const Mobile = styled.div`
  display: flex;
  justify-content: center;
  margin: 53px 0 0 0;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const Desktop = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    position: absolute;
    top: 0;
    margin-top: 110px;
    right: 1%;
    z-index: 0;
  }

  @media screen and (min-width: 1800px) {
    margin-top: 155px;
  }

  @media screen and (min-width: 2650px) {
    margin-top: 200px;
  }

  @media screen and (min-width: 3500px) {
    margin-top: 260px;
  }
`;

const DesktopImg = styled.img`
  @media screen and (min-width: 768px) {
    width: 650px;
    height: 487.5px;
  }

  @media screen and (min-width: 1800px) {
    width: 800px;
    height: 600px;
  }

  @media screen and (min-width: 2650px) {
    width: 1000px;
    height: 750px;
  }

  @media screen and (min-width: 3500px) {
    width: 1800px;
    height: 1350px;
  }
`;

function Logo() {
  return (
    <div>
      <Mobile>
        <img src="../../assets/logo-mobile.png" alt="Logo" />
      </Mobile>
      <Desktop>
        <DesktopImg src="../../assets/logo-desktop.png" alt="Logo" />
      </Desktop>
    </div>
  );
}

export default Logo;
