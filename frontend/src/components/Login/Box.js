import Input from "./Input";
import Checkbox from "./Checkbox";
import Button from "./Button";

function Box() {
  return (
    <div className="box-login">
      <h2>Login</h2>
      <div className="container">
        <Input
          id="nome-email-field"
          label="Nome/Email"
          type="text"
          placeholder="Nome/Email"
        />

        <Input
          id="senha-field"
          label="Senha"
          type="password"
          placeholder="********"
        />

        <Checkbox
          id="container-checkbox"
          idLabel="label-continuar-conectado"
          text="Continuar Conectado"
        />

        <div id="container-buttons">
          <Button
            id="btn-entrar"
            href="#"
            icon="fas fa-sign-in-alt"
            text="Entrar"
          />

          <Button
            id="btn-cadastrarse"
            href="#"
            icon="fas fa-user-plus"
            text="Cadastrar-se"
          />
        </div>
      </div>
    </div>
  );
}

export default Box;
