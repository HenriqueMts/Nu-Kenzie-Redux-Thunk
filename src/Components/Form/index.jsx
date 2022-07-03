import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useSelector, useDispatch } from "react-redux";

import { addTransactionThunk } from "../../Store/Modules/listTransactions/thunks";
import { Container, Content, PriceContent } from "./styles";

const Form = () => {
  const list = useSelector((store) => store.list);
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    descricao: yup.string().required("Required Field"),
    preco: yup
      .number()
      .required()
      .typeError("Required Field, please just numbers"),
    tipo: yup.string().required(),
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
      <Content onSubmit={handleSubmit(createListTransition)}>
        <label>Description</label>
        <input
          className="description--input"
          {...register("descricao")}
          placeholder="Put a descritption"
        />
        {errors.descricao && (
          <span className="error--mensage">{errors.descricao.message}</span>
        )}
        <PriceContent>
          <div>
            <label>Value</label>
            <input {...register("preco")} placeholder="$" />
          </div>
          <div>
            <label>Type of Value</label>
            <select className="price--type" {...register("tipo")}>
              <option value="Deposit">Deposit</option>
              <option value="Output">Withdrawn</option>
            </select>
          </div>
        </PriceContent>

        {errors.preco && (
          <span className="error--mensage">{errors.preco.message}</span>
        )}
        <button>Send Trasaction</button>
      </Content>
    </Container>
  );
};
export default Form;
