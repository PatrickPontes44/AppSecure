import "../styles/Login.css";
import Header from "../components/Login/Header";

function Login() {
  return (
    <div id="page-login">
      <Header />
      <div class="box-login">
        <h2>Login</h2>
        <div class="container">
          <div id="nome-email-field">
            <label>Nome/Email</label>
            <br />
            <input type="text" placeholder="Nome/Email"/>
          </div>

          <div id="senha-field">
            <label>Senha</label>
            <br />
            <input type="password" placeholder="********"/>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <input type="checkbox" />
            <label
              style={{
                fontSize: "10px",
                color: "#000",
                fontWeight: "bold",
                marginLeft: "5.29px",
              }}
            >
              Continuar Conectado
            </label>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 11.3,
            }}
          >
            <a id="btn-entrar" href="#">
              <i class="fas fa-sign-in-alt"></i>
              Entrar
            </a>
            <a id="btn-cadastrarse" href="#">
              <i class="fas fa-user-plus"></i>
              Cadastrar-se
            </a>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "53px"}}>
        <img src="../../assets/logo.png" />
      </div>
    </div>
  );
}

export default Login;
