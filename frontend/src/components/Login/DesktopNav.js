import styled from "styled-components";

const A = styled.a`
  display: none;

  @media screen and (min-width: 1305px) {
    display: flex;
    text-decoration: none;
    font-size: 2.5rem;
    color: #ff5678;
    font-weight: bold;
    margin: 0 102px 0 0;
  }

  @media screen and (min-width: 1800px) {
    font-size: 5rem;
  }

  @media screen and (min-width: 2650px) {
    font-size: 8.5rem;
  }

  @media screen and (min-width: 3765px) {
    font-size: 10.5rem;
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
