import styled from "styled-components";
export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 720px) {
    justify-content: space-around;
    margin-top: 2%;
    gap: 12px;
    height: 60vh;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin-top: 10%;
  width: 100%;
  @media (min-width: 720px) {
    flex-direction: row;
    align-items: center;
    top: 0;
    margin-top: 0;
  }

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
    transition: 0.6s ease;
  }
`;
export const Content = styled.ul`
  gap: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-height: 120px;
  overflow-y: scroll;

  @media (min-width: 720px) {
    max-height: 60vh;
  }
`;
export const NoCardContent = styled.aside`
  margin: 0 auto;
  width: 92%;
  @media (min-width: 720px) {
    width: 80%;
  }
  img {
    width: 100%;
  }
`;
