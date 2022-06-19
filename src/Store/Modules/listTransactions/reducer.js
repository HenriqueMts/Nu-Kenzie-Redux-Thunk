import { ADD_TRANSACTION, REMOVE_TRANSACTION } from "./actionType";

const inicialState = JSON.parse(localStorage.getItem("transactions")) || [];

const listReducer = (state = inicialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      const { transaction } = action;
      return [...state, transaction];

    case REMOVE_TRANSACTION:
      const { list } = action;
      console.log(list);
      return list;

    default:
      return state;
  }
};
export default listReducer;
