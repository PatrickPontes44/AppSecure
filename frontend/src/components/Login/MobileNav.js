import styled from "styled-components";

const A = styled.a`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
function MobileNav(props) {
  return (
    <A href={props.href} onClick={(e) => e.preventDefault()} id={props.id}>
      <i className={props.icon}></i>
    </A>
  );
}

export default MobileNav;
