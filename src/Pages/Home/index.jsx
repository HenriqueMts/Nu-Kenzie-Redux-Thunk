import { Container } from "./styles";
import { useHistory } from "react-router-dom";
import Logo from "../../Assets/HomeLogo.png";
import Form from "../../Components/Form";
import TransactionsList from "../../Components/TransactionsList";

const Home = () => {
  const history = useHistory();
  return (
    <Container>
      <header>
        <h1>
          <img src={Logo} alt="Logo" />
        </h1>
        <button onClick={() => history.push("/")}>Home</button>
      </header>

      <Form />
      <TransactionsList />
    </Container>
  );
};

export default Home;
