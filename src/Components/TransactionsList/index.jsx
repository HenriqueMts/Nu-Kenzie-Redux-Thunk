import { useSelector } from "react-redux/es/exports";

import { useState } from "react";

import NoCard from "../../Assets/NoCard.png";

import TransactionCard from "../TransactionCard";

import { Container, Content, Main, NoCardContent } from "./styles";
const TransactionsList = () => {
  const list = useSelector((store) => store.list);

  const [buttonFilter, setButtonFilter] = useState("All");

  return (
    <Main>
      <Container>
        <h3>Financials summary</h3>
        <div>
          <button onClick={() => setButtonFilter("All")}>All</button>
          <button onClick={() => setButtonFilter("Deposit")}>Deposits</button>
          <button onClick={() => setButtonFilter("Withdrawn")}>
            Withdrawn
          </button>
        </div>
      </Container>
      {list.length > 0 ? (
        <Content>
          {list
            .filter((transaction) =>
              buttonFilter === "All" ? list : transaction.tipo === buttonFilter
            )
            .map((transaction) => (
              <TransactionCard
                key={transaction.NewId}
                transaction={transaction}
              />
            ))}
        </Content>
      ) : (
        <NoCardContent>
          <img src={NoCard} alt="No Card" />
        </NoCardContent>
      )}
    </Main>
  );
};
export default TransactionsList;
