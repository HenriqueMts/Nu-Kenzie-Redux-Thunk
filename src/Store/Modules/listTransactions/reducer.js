import { ADD_TRANSACTION, REMOVE_TRANSACTION } from "./actionType";

const listReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      const { transaction } = action;
      return [...state, transaction];

    case REMOVE_TRANSACTION:
      const { id } = action;
      const newList = state.filter((transaction) => transaction.id !== id);

      return newList;

    default:
      return state;
  }
};
export default listReducer;
