import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

function LoginHeader() {
  return (
    <div>
      <header>
        <h1>
          App <span className="highlight">Secure</span>
        </h1>
  
        <MobileNav
          href="#"
          id="mobile-nav"
          icon="fa fa-bars"
        />
  
        <DesktopNav 
          href="#"
          id="desktop-nav"
          text="Sobre Nós"
        />
      </header>
    </div>
  );
}

export default LoginHeader;
