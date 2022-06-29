import { removeTransactionThunk } from "../../Store/Modules/listTransactions/thunks";
import { Container, Content } from "./styles";
import { useDispatch } from "react-redux";

const TransactionCard = ({ transaction }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <h2>{transaction.descricao}</h2>
      <p>{transaction.tipo}</p>
      <Content>
        <p>{transaction.preco}</p>
        <button
          onClick={() => dispatch(removeTransactionThunk(transaction.id))}
        >
          x
        </button>
      </Content>
    </Container>
  );
};
export default TransactionCard;
