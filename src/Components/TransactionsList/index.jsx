import { useSelector } from "react-redux/es/exports";
import { Container } from "./styles";
const TransactionsList = () => {
  const list = useSelector((store) => store.list);
  console.log(list);

  return (
    <Container>
      {list.map((transaction) => (
        <li>
          <h3>{transaction.descricao}</h3>
        </li>
      ))}
    </Container>
  );
};
export default TransactionsList;
