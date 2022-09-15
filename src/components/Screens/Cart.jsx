import styled from "styled-components";
import { useContext } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Sidebar from "../Common/Sidebar";
import SessionHeader from "../Common/SessionHeader";

import UserContext from "../../Context/UserContext";

export default function Store() {

  const { showSideBar } = useContext(UserContext);

  return (
    <Container>
        <Header></Header>

        <SessionHeader title={'CARRINHO DE COMPRAS'} />

        {showSideBar ? <Sidebar /> : <></>}

        <h1>Carrinho de Compras</h1>

        <Footer></Footer>
    </Container>
  );
}

const Container = styled.div`
  & {
    width: calc(100vw - (100vw - 100%));
    min-height: 100vh;

    flex-direction: column;

    font-weight: 700;
    font-size: 15px;

    background-color: #f3f3f3;
  }

  h1 {
    color: black;
  }
`;



const Product = styled.div`
  & {
    position: relative;
    flex-direction: column;

    width: calc(50% - 10px);
    max-width: 150px;
    height: 200px;

    padding: 10px;
    padding-top: 0px;
    margin: 5px;

    font-weight: 700;
    font-size: 15px;

    background: #ffffff;

    border-radius: 14px;

    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  }
`;
