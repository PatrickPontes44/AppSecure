import styled from "styled-components";

const A = styled.a`
  margin: 0 2.94px 0 0;

  &#btn-entrar {
    width: 68.21px;
    height: 23.54px;
    background: #ff5678;
    border-radius: 10px;
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  &#btn-cadastrarse {
    font-size: 1.4rem;
    color: #ff5678;
    text-decoration: none;
  }

  @media screen and (min-width: 1305px) {
    &#btn-entrar {
      width: 122.03px;
      height: 42.42px;
      font-size: 2rem;
    }

    &#btn-cadastrarse {
      font-size: 2rem;
    }
  }
`;

function Button(props) {
  return (
    <A id={props.id} href={props.href}>
      <i className={props.icon}></i>
      {props.text}
    </A>
  );
}

export default Button;
