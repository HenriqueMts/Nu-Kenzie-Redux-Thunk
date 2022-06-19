import { ADD_TRANSACTION, REMOVE_TRANSACTION } from "./actionType";

export const addTransaction = (transaction) => ({
  type: ADD_TRANSACTION,
  transaction,
});

export const removeTransaction = (list) => ({ type: REMOVE_TRANSACTION, list });
