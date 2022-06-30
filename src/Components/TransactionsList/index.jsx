import { useSelector } from "react-redux/es/exports";

import { useState } from "react";

import NoCard from "../../Assets/NoCard.png";

import TransactionCard from "../TransactionCard";

import { Container, Content } from "./styles";
const TransactionsList = () => {
  const list = useSelector((store) => store.list);

  const [buttonFilter, setButtonFilter] = useState("All");

  return (
    <>
      <Container>
        <h3>Resumo Financeiro</h3>
        <div>
          <button onClick={() => setButtonFilter("All")}>All</button>
          <button onClick={() => setButtonFilter("Deposit")}>Deposits</button>
          <button onClick={() => setButtonFilter("Output")}>Withdrawn</button>
        </div>
      </Container>
      {list.length > 0 ? (
        <Content>
          {list
            .filter((transaction) =>
              buttonFilter === "All" ? list : transaction.tipo === buttonFilter
            )
            .map((transaction) => (
              <TransactionCard key={transaction.id} transaction={transaction} />
            ))}
        </Content>
      ) : (
        <aside>
          <img src={NoCard} alt="No Card" />
        </aside>
      )}
    </>
  );
};
export default TransactionsList;
