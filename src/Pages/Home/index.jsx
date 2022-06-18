import { Container } from "./styles";
import { useHistory } from "react-router-dom";
import Logo from "../../Assets/HomeLogo.png";

const Home = () => {
  const history = useHistory();
  return (
    <Container>
      <header>
        <h1>
          <img src={Logo} alt="Logo" />
        </h1>
        <button onClick={() => history.push("/")}>Inicio</button>
      </header>
    </Container>
  );
};

export default Home;
