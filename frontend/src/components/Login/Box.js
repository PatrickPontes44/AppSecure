import Input from "./Input";
import Checkbox from "./Checkbox";
import Button from "./Button";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import BusinessRules from "../../scripts/businessRules";

import styled from "styled-components";

import { Link } from "react-router-dom";

const BoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 280px;
  height: 250px;
  margin: 72px auto 0 auto;
  background: #fff;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  @media screen and (min-width: 1305px) {
    width: 500px;
    height: 420px;
    margin-left: 6%;
    z-index: 1;
  }
`;

const H2 = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin: 5.3px 0 9.02px 0;
  font-weight: bold;

  @media screen and (min-width: 1305px) {
    font-size: 3.8rem;
    margin-top: 9.55px;
    margin-bottom: 29.7px;
  }
`;

const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Box() {
  useEffect(() => {
    document
      .getElementById("btn-entrar")
      .addEventListener("click", BusinessRules);
  });

  return (
    <BoxDiv>
      <H2>Login</H2>
      <div className="container">
        <Input
          id="nome-email-field"
          label="Nome/Email"
          type="text"
          placeholder="Nome/Email"
          idInput="nome-email"
        />

        <Input
          id="senha-field"
          label="Senha"
          type="password"
          placeholder="********"
          idInput="senha"
        />

        <Checkbox
          id="container-checkbox"
          idLabel="label-continuar-conectado"
          text="Continuar Conectado"
        />

        <ButtonsDiv>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Button
              id="btn-entrar"
              href="#"
              icon="fas fa-sign-in-alt"
              text="Entrar"
            />
          </Link>

          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Button
              id="btn-cadastrarse"
              href="#"
              icon="fas fa-user-plus"
              text="Cadastrar-se"
            />
          </Link>
        </ButtonsDiv>
      </div>
      <ToastContainer />
    </BoxDiv>
  );
}

export default Box;
