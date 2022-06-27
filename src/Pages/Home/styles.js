import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
`;
export const Header = styled.header`
  color: #f8f9fa;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 80px;
  border-bottom: 2px solid #f8f9fa;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0px 6px 11px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 6px 11px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 6px 11px -3px rgba(0, 0, 0, 0.75);

  button {
    width: 64px;
    height: 30px;
    background-color: #e9ecef;
    border: #e9ecef;
    border-radius: 6px;
  }
  button:hover {
    background-color: #fd377e;
    border: #fd377e;
    color: #fff;
    box-shadow: 0px 0px 13px 0px rgba(253, 55, 126, 0.75);
    -webkit-box-shadow: 0px 0px 13px 0px rgba(253, 55, 126, 0.75);
    -moz-box-shadow: 0px 0px 13px 0px rgba(253, 55, 126, 0.75);
    transition: 0.6s ease;
  }

  @media (min-width: 720px) {
    justify-content: space-between;

    h1 {
      margin-left: 6%;
    }
    button {
      margin-right: 6%;
    }
  }
`;

export const Content = styled.main`
  display: flex;
  width: 100%;
`;
