import { useSelector } from "react-redux/es/exports";

import { useState } from "react";

import NoCard from "../../Assets/NoCard.png";

import TransactionCard from "../TransactionCard";

import { Container } from "./styles";
const TransactionsList = () => {
  const list = useSelector((store) => store.list);

  const [buttonFilter, setButtonFilter] = useState("All");

  return (
    <>
      {list.length > 0 ? (
        <>
          <Container>
            <section className="filter--content">
              <h3>Resumo Financeiro</h3>
              <div className="buttons--content">
                <button onClick={() => setButtonFilter("All")}>All</button>
                <button onClick={() => setButtonFilter("Deposit")}>
                  Deposits
                </button>
                <button onClick={() => setButtonFilter("Output")}>
                  Outputs
                </button>
              </div>
            </section>
            <section>
              {list
                .filter((transaction) =>
                  buttonFilter === "All"
                    ? list
                    : transaction.tipo === buttonFilter
                )
                .map((transaction) => (
                  <ul>
                    <TransactionCard
                      key={transaction.id}
                      transaction={transaction}
                    />
                  </ul>
                ))}
            </section>
          </Container>
        </>
      ) : (
        <aside>
          <img src={NoCard} alt="No Card" />
        </aside>
      )}
    </>
  );
};
export default TransactionsList;
