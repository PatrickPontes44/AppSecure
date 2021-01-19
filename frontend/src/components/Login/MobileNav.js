import SideNav from "./SideNav";
import styled from "styled-components";

const A = styled.a`
  cursor: pointer;

  @media screen and (min-width: 1305px) {
    display: none;
  }
`;

const I = styled.i`
  font-size: 2.4rem;
  margin: 23px 39px 0 0;
  color: #ff5678;
`;

function openNav() {
  document.getElementById("sidenav").style.width = "180px";
}

function MobileNav(props) {
  return (
    <div>
      <SideNav href="#"></SideNav>

      {/* <A href={props.href} onClick={(e) => e.preventDefault()} id={props.id}>
        <I className={props.icon}></I>
      </A> */}

      <A href={props.href} onClick={(e) => openNav()} id={props.id}>
        <I className={props.icon}></I>
      </A>
    </div>
  );
}

export default MobileNav;
