import styled from "styled-components";

export const Container = styled.li`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #e9ecef;
  min-height: 68px;
  border-left: 5px solid
    ${(props) => (props.type === "Deposit" ? "#03B898" : "#FD377E")};
  border-radius: 8px;
  button {
    color: #868e96;
    border: #e9ecef;
    background-color: #e9ecef;
  }
`;
export const Content = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  span {
    font-size: 0.8rem;
    color: #868e96;
  }
`;
