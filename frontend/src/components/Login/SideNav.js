import styled from "styled-components";
import { Link } from "react-router-dom";

const SideNavMobile = styled.nav`
  height: 180px;
  width: 140px;
  width: 0;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #fff;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 25px;
  display: flex;
  align-items: center;
  z-index: 0;

  a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 18px;
    color: #ff5678;
    transition: 0.3s;
    z-index: 1;
  }

  a:hover {
    color: #f2355b;
  }

  a:active {
      color: #00000;
  }

  .closebtn {
    position: absolute;
    top: 0px;
    right: 25px;
    font-size: 25px;
    margin-left: 50px;
    color: #ff5678;
  }
`;

function SideNav(props) {
  return (
    <SideNavMobile id="sidenav">
      <a href={props.href} class="closebtn" onClick={() => closeNav()}>
        &times;
      </a>
      <Link>Sobre Nós</Link>
    </SideNavMobile>
  );
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}

export default SideNav;
