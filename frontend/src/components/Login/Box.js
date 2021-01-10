function Box() {
  return (
    <div className="box-login">
      <h2>Login</h2>
      <div className="container">
        <div id="nome-email-field">
          <label>Nome/Email</label>
          <br />
          <input type="text" placeholder="Nome/Email" />
        </div>

        <div id="senha-field">
          <label>Senha</label>
          <br />
          <input type="password" placeholder="********" />
        </div>

        <div id="container-checkbox">
          <input type="checkbox" className="checkbox-style" />
          <label id="label-continuar-conectado">Continuar Conectado</label>
        </div>
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
