import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  height: 36px;
  border: 2px solid ${(props) => (props.total >= 0 ? "#03B898" : "#FD377E")};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 8%;
  color: #fff;
  background-color: ${(props) => (props.total >= 0 ? "#03B898" : "#FD377E")};
  @media (min-width: 720px) {
    width: 280px;
    margin: 0;
    margin-left: 17%;
  }
`;
