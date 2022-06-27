import { Container, Content, Header } from "./styles";
import { useHistory } from "react-router-dom";
import Logo from "../../Assets/HomeLogo.png";
import Form from "../../Components/Form";
import TransactionsList from "../../Components/TransactionsList";
import TotalMoney from "../../Components/TotalMoney";

const Home = () => {
  const history = useHistory();
  return (
    <Container>
      <Header>
        <h1>
          <img src={Logo} alt="Logo" />
        </h1>
        <button onClick={() => history.push("/")}>Home</button>
      </Header>
      <Content>
        <Form />
        <TransactionsList />
      </Content>
      <TotalMoney />
    </Container>
  );
};

export default Home;
