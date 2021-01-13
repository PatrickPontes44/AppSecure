import styled from "styled-components";

const A = styled.a`
  @media screen and (min-width: 1305px) {
    display: none;
  }
`;

const I = styled.i`
  font-size: 2.4rem;
  margin: 23px 39px 0 0;
  color: #ff5678;
`;

function MobileNav(props) {
  return (
    <A href={props.href} onClick={(e) => e.preventDefault()} id={props.id}>
      <I className={props.icon}></I>
    </A>
  );
}

export default MobileNav;
