import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Sidebar from "../Common/Sidebar";
import SessionHeader from "../Common/SessionHeader";

import UserContext from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Payment() {
    const navigate = useNavigate();

    const { showSideBar, cart, setCart } = useContext(UserContext);

    useEffect(() => {
        if (localStorage.getItem("SuperWall-cart") !== null) {
            setCart(JSON.parse(localStorage.getItem("SuperWall-cart")));
        }
    }, [setCart]);

    return (
        <Container>
            <Header></Header>

            <SessionHeader title={"DADOS DE PAGAMENTO"} />

            {showSideBar ? <Sidebar /> : <></>}

            <h1>Dados de compra</h1>

            <ToPayment>
                <div>
                    <Continue onClick={() => navigate("/confirmation")}>Concluir Compra</Continue>
                    <Cancel onClick={() => navigate("/cart")}>Voltar</Cancel>
                </div>
            </ToPayment>

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
  justify-content: flex-start;

  font-weight: 700;
  font-size: 15px;

  padding: 70px 0 180px 0;
  background-color: #f3f3f3;

  h1 {
    color: black;
  }
`;

const ToPayment = styled.div`
  width: 100vw;
  height: 100px;
  background-color: white;
  padding: 0 20px;

  position: fixed;
  bottom: 60px;
  left: 0;

  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: var(--azul-base);
    font-weight: 500;
    font-size: 16px;
  }

  h2 {
    color: var(--azul-base);
    font-weight: 900;
    font-size: 26px;
    margin-top: 10px;
  }

  & > div {
    width: 40%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

const Continue = styled.button`
  cursor: pointer;
  background: var(--azul-destaque);
  height: 30px;
  border-radius: 5px;

  font-weight: 700;
  font-size: 18px;
  color: white;

  &:hover {
    filter: brightness(1.4);
  }
`;

const Cancel = styled.button`
  cursor: pointer;
  height: 20px;
  border-radius: 5px;

  font-weight: 300;
  font-size: 12px;
  color: var(--azul-base);
  margin-top: 10px;

  &:hover {
    filter: brightness(0.6);
    font-weight: 500;
  }
`;