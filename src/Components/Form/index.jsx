import { useState } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTransaction } from "../../Store/Modules/listTransactions/actions";
const Form = () => {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const list = useSelector((store) => store.list);
  const dispatch = useDispatch();

  const createListTransition = () => {
    let NewId;

    list.length < 1 ? (NewId = 1) : (NewId = list.length + 1);

    const trasaction = {
      id: NewId,
      descricao: description,
      preco: price,
      tipo: type,
    };
    dispatch(addTransaction(trasaction));
  };
  return (
    <form
      className="form--content"
      onSubmit={(event) => {
        createListTransition(event.preventDefault());
      }}
    >
      <label>Description</label>
      <input
        className="description--input"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Put a descritption"
      />
      <div className="price--content">
        <label>
          Value
          <input
            className="price--input"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            placeholder="$"
          />
        </label>
        <label>
          Type of Value
          <select
            className="price--type"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option value="" disabled selected></option>
            <option value="Deposit">Deposit</option>
            <option value="Output">Output</option>
          </select>
        </label>
      </div>
      <button>Send Trasaction</button>
    </form>
  );
};
export default Form;
