import styled from "styled-components";

const A = styled.a`
  display: none;

  @media screen and (min-width: 1305px) {
    display: flex;
    text-decoration: none;
    font-size: 25px;
    color: #ff5678;
    font-weight: bold;
    margin: 0 102px 0 0;
  }

  @media screen and (min-width: 1800px) {
    font-size: 50px;
  }

  @media screen and (min-width: 2650px) {
    font-size: 85px;
  }

  @media screen and (min-width: 3765px) {
    font-size: 105px;
  }
`;

function DesktopNav(props) {
  return (
    // prettier-ignore
    <A href={props.href} onClick={(e) => e.preventDefault()} id={props.id}>
      {props.text}
    </A>
  );
}

export default DesktopNav;
