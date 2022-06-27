import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

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
    <div className={totalMoney < 0 ? "overdrawn--price" : "positive--price"}>
      <h3>Total:</h3>
      <span> ${totalMoney} </span>
    </div>
  );
};
export default TotalMoney;
