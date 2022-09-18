import styled from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Sidebar from "../Common/Sidebar";

import UserContext from "../../Context/UserContext";
import logoFullWhite from "../../assets/img/logo-full-white.svg";

export default function Confirmation() {
  const { showSideBar } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <Container>
      <Header></Header>

      {showSideBar ? <Sidebar /> : <></>}

      <h1>Compra concluída com sucesso! <br /> Agradecemos a preferência!</h1>

      <span>
        <img src={logoFullWhite} alt="" />
      </span>
      
      <h2 onClick={() => navigate('/')}>Clique aqui para retornar à tela inicial</h2>

      <Footer></Footer>
    </Container>
  );
}

const Container = styled.div`
  width: calc(100vw - (100vw - 100%));
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  font-weight: 700;
  font-size: 15px;

  padding: 70px 0 180px 0;
  background-color: #f3f3f3;

  h1 {
    font-weight: 800;
    font-size: 24px;
    text-align: center;
    line-height: 40px;
    color: var(--azul-base);
  }

  span{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: var(--azul-destaque);
  }

  img {
    width: 60%;
  }

  h2 {
    cursor: pointer;
    font-weight: 300;
    font-size: 16px;
    text-align: center;
    line-height: 40px;
    color: var(--azul-base);
    &:hover{
      font-weight:600;
    }
  }
`;
