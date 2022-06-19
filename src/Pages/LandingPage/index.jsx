import LandingImg from "../../Assets/LandingImg.svg";
import Logo from "../../Assets/Logo.svg";

import { useHistory } from "react-router-dom";

import { Container } from "./styles";

const LandingPage = () => {
  const history = useHistory();
  return (
    <Container>
      <div>
        <h1>
          <img src={Logo} alt="Logo" />
        </h1>
        <h3>Centralize control of your finances</h3>
        <span>in a fast and secure way</span>
        <button onClick={() => history.push("/home")}>Start</button>
      </div>
      <aside>
        <img src={LandingImg} alt="Ilustrative" />
      </aside>
    </Container>
  );
};
export default LandingPage;
