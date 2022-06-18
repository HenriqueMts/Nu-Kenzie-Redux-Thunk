import LandingImg from "../../Assets/LandingImg.svg";
import Logo from "../../Assets/Logo.svg";

import { Container } from "./styles";

const LandingPage = () => {
  return (
    <Container>
      <div>
        <h1>
          <img src={Logo} alt="Logo" />
        </h1>
        <h3>Centralize o controle das suas finanças</h3>
        <span>de forma rápida e segura</span>
        <button>Entrar</button>
      </div>
      <aside>
        <img src={LandingImg} alt="Ilustrative" />
      </aside>
    </Container>
  );
};
export default LandingPage;
