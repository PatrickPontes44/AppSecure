function LoginHeader() {
  return (
    <div>
      <header>
        <h1>
          App <span className="highlight">Secure</span>
        </h1>
        <a href="#" onClick={(e) => e.preventDefault()} id="mobile-nav">
          <i className="fa fa-bars"></i>
        </a>
        <a href="#" onClick={(e) => e.preventDefault()} id="desktop-nav">
          Sobre Nós
        </a>
      </header>
    </div>
  );
}

export default LoginHeader;
