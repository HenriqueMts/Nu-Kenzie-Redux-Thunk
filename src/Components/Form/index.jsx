import { useState } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useSelector, useDispatch } from "react-redux";

import { addTransactionThunk } from "../../Store/Modules/listTransactions/thunks";
import { Container } from "./styles";

const Form = () => {
  const list = useSelector((store) => store.list);
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    descricao: yup.string().required("Required Field"),
    preco: yup.number("Please just numbers").required("Campo Obrigatório"),
    tipo: yup.string().required("Required field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const createListTransition = ({ descricao, preco, tipo }) => {
    let NewId;
    list.length < 1 ? (NewId = 1) : (NewId = list.length + 1);
    const transaction = {
      NewId,
      descricao,
      preco,
      tipo,
    };

    dispatch(addTransactionThunk(transaction));
  };
  return (
    <Container>
      <form
        className="form--content"
        onSubmit={handleSubmit(createListTransition)}
      >
        <label>Description</label>
        <input
          className="description--input"
          {...register("descricao")}
          placeholder="Put a descritption"
        />
        {errors.descricao && (
          <span className="error--mensage">{errors.descricao.message}</span>
        )}
        <div className="price--content">
          <label>
            Value
            <input
              className="price--input"
              {...register("preco")}
              placeholder="$"
            />
          </label>
          {errors.descricao && (
            <span className="error--mensage">{errors.descricao.message}</span>
          )}
          <label>
            Type of Value
            <select className="price--type" {...register("tipo")}>
              <option value="" disabled selected></option>
              <option value="Deposit">Deposit</option>
              <option value="Output">Output</option>
            </select>
          </label>
          {errors.tipo && (
            <span className="error--mensage">{errors.tipo.message}</span>
          )}
        </div>
        <button>Send Trasaction</button>
      </form>
    </Container>
  );
};
export default Form;
