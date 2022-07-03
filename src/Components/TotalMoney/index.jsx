import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Container } from "./styles";

const TotalMoney = () => {
  const [totalMoney, SetTotalMoney] = useState(0);

  const list = useSelector((store) => store.list);
  useEffect(() => {
    calcTotalPrice();
  }, [list]);
  const calcTotalPrice = () => {
    const sum = list
      .filter((transac) => transac.tipo === "Deposit")
      .reduce((prev, current) => current.preco + prev, 0);
    const sub = list
      .filter((transac) => transac.tipo === "Output")
      .reduce((prev, current) => current.preco + prev, 0);

    const total = sum - sub;
    SetTotalMoney(total);
  };

  return (
    <Container total={totalMoney}>
      <h3>Total:</h3>
      <span> ${totalMoney} </span>
    </Container>
  );
};
export default TotalMoney;
