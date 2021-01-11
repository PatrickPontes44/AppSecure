import styled from "styled-components";

const StyledA = styled.a`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
function MobileNav(props) {
  return (
    <StyledA href={props.href} onClick={(e) => e.preventDefault()} id={props.id}>
      <i className={props.icon}></i>
    </StyledA>
  );
}

export default MobileNav;
