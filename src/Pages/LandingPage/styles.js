import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #212529;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  div {
    margin-top: 60%;
    width: 60%;
    height: 100vh;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    h1 {
      margin-bottom: 15%;
    }
    h3 {
      margin-top: 38%;
      text-align: start;
      font-size: 2rem;
      color: #fff;
    }
    span {
      margin-top: 15%;
      color: #fff;
      font-size: 0.8rem;
    }
    button {
      border: 2px solid #fd377e;
      background-color: #fd377e;
      color: #fff;
      margin-top: 20%;
      width: 100%;
      height: 36px;
      border-radius: 8px;
    }
    button:hover {
      box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.75);
      -webkit-box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.75);
      -moz-box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.75);
      transition: 0.6s ease;
    }
  }
  aside {
    display: none;
  }

  @media (min-width: 720px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    div {
      margin-top: 0;
      width: 28%;
      height: auto;
      align-items: flex-start;
      display: flex;
      flex-direction: column;

      h3 {
        margin-top: 15%;
        margin-top: 0;
        text-align: start;
        font-size: 2rem;
        color: #fff;
      }
      span {
        margin-top: 15%;
        color: #fff;
        font-size: 0.8rem;
      }
      button {
        border: 2px solid #fd377e;
        background-color: #fd377e;
        color: #fff;
        margin-top: 20%;
        width: 80%;
        height: 40px;
        border-radius: 8px;
      }
    }
    aside {
      width: 50%;
      display: block;
      img {
        width: 100%;
      }
    }
  } ;
`;
