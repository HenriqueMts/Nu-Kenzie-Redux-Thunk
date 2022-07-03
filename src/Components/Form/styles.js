import styled from "styled-components";

export const Container = styled.section`
  width: 90%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 720px) {
    width: 80%;
    margin-left: 8%;
  }
`;
export const Content = styled.form`
  gap: 12px;
  margin-top: 10%;
  border-radius: 4px;
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  border: 2px solid #868e96;

  .description--input {
    margin-left: 6%;
    border-radius: 6px;
    background: #f8f9fa;
    border: 3px solid #f8f9fa;
    height: 42px;
    width: 80%;

    ::placeholder {
      color: #868e96;
    }
  }
  label {
    font-size: 0.9rem;
    padding-left: 8px;
    margin-top: 10%;
  }

  span {
    font-size: 0.7rem;
    color: #fd377e;
    margin-left: 8%;
  }

  button {
    margin: 0 auto;
    width: 70%;
    height: 42px;
    background-color: #fd377e;
    border: #fd377e;
    border-radius: 8px;
    color: #fff;
  }

  @media (min-width: 720px) {
    width: 85%;
    .description--input {
      margin-left: 5%;
      border-radius: 6px;
      height: 38px;
      width: 80%;
    }
    button {
      margin: 0 auto;
      width: 70%;
      height: 42px;
      margin-top: 8%;
      background-color: #fd377e;
      border: #fd377e;
      border-radius: 8px;
      color: #fff;
    }
  }
`;
export const PriceContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 2%;
  margin-top: 10%;
  gap: 12px;
  input {
    width: 70%;
    margin-top: 8%;
    margin-left: 6%;
    border-radius: 6px;
    background: #f8f9fa;
    border: 3px solid #f8f9fa;
    height: 42px;
    font-size: 0.8rem;

    ::placeholder {
      color: #868e96;
    }
  }
  select {
    width: 112px;
    margin-top: 8%;
    margin-left: 6%;
    border-radius: 6px;
    background: #f8f9fa;
    border: 3px solid #f8f9fa;
    height: 50px;
    color: #868e96;
  }
  label {
    font-size: 0.9rem;
    padding-left: 8px;
    margin-top: 10%;
  }
`;
