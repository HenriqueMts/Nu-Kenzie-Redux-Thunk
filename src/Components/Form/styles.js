import styled from "styled-components";

export const Container = styled.section`
  width: 80%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 2px solid #868e96;

    label {
      font-size: 0.8rem;
    }

    span {
      font-size: 0.7rem;
      color: #fd377e;
    }
  }
  .price--content {
    display: flex;
  }
`;
