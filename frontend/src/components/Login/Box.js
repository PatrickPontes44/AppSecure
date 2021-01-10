import Input from "./Input";
import Checkbox from "./Checkbox";

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
          <a id="btn-entrar" href="#">
            <i className="fas fa-sign-in-alt"></i>
            Entrar
          </a>
          <a id="btn-cadastrarse" href="#">
            <i className="fas fa-user-plus"></i>
            Cadastrar-se
          </a>
        </div>
      </div>
    </div>
  );
}

export default Box;
