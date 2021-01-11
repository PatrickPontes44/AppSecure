import styled from "styled-components";

const StyledA = styled.a`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    text-decoration: none;
    font-size: 25px;
    color: #ff5678;
    font-weight: bold;
    margin-top: 32px;
    margin-right: 102px;
  }

  @media screen and (min-width: 1800px) {
    font-size: 65px;
  }

  @media screen and (min-width: 2650px) {
    font-size: 105px;
  }

  @media screen and (min-width: 3500px) {
    font-size: 145px;
  }
`;

function DesktopNav(props) {
  return (
    // prettier-ignore
    <StyledA href={props.href} onClick={(e) => e.preventDefault()} id={props.id}>
      {props.text}
    </StyledA>
  );
}

export default DesktopNav;
