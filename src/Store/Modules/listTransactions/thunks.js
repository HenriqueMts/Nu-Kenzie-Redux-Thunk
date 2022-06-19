import { addTransaction, removeTransaction } from "./actions";

export const addTransactionThunk = (transaction) => {
  console.log(transaction);
  return (dispatch) => {
    const list = JSON.parse(localStorage.getItem("transactions")) || [];
    list.push(transaction);
    localStorage.setItem("transactions", JSON.stringify(list));
    dispatch(addTransaction(transaction));
  };
};

export const removeTransactionThunk = (id) => {
  return (dispatch, getStore) => {
    const { list } = getStore();
    const newList = list.filter((product) => product.id !== id);

    localStorage.setItem("transactions", JSON.stringify(newList));

    dispatch(removeTransaction(newList));
  };
};
