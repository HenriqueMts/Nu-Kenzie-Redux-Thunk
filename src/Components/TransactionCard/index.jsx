import { removeTransactionThunk } from "../../Store/Modules/listTransactions/thunks";
import { Container, Content } from "./styles";
import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";

const TransactionCard = ({ transaction }) => {
  const dispatch = useDispatch();

  return (
    <Container type={transaction.tipo}>
      <Content>
        <h2>{transaction.descricao}</h2>
        <span>{transaction.tipo}</span>
      </Content>

      <p>{transaction.preco}$</p>
      <button onClick={() => dispatch(removeTransactionThunk(transaction.id))}>
        <FaTrash />
      </button>
    </Container>
  );
};
export default TransactionCard;
