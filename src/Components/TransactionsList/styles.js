import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin-top: 10%;
  width: 100%;

  button {
    margin-top: 12px;
    margin-right: 6px;
    padding: 2px;
    width: 68px;
    height: 30px;
    background-color: #e9ecef;
    border: #e9ecef;
    border-radius: 6px;
    color: #868e96;
  }
  button:hover {
    background-color: #fd377e;
    border: #fd377e;
    color: #fff;
  }
`;
export const Content = styled.ul`
  width: 100%;
`;
