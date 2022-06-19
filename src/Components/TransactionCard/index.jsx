import { Container, Content } from "./styles";

const TransactionCard = ({ transaction }) => {
  return (
    <Container>
      <h2>{transaction.descricao}</h2>
      <p>{transaction.tipo}</p>
      <Content>
        <p>{transaction.preco}</p>
        <button>x</button>
      </Content>
    </Container>
  );
};
export default TransactionCard;
