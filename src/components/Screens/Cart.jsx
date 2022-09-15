import styled from "styled-components";
import { useContext, useEffect } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Sidebar from "../Common/Sidebar";
import SessionHeader from "../Common/SessionHeader";

import UserContext from "../../Context/UserContext";
import SubmitButton from "../Common/SubmitButton";

export default function Store() {

  const { showSideBar, cart, setCart } = useContext(UserContext);

  console.log(cart);

  useEffect(() => {
    if (localStorage.getItem('SuperWall-cart') !== null) {
        setCart(JSON.parse(localStorage.getItem('SuperWall-cart')));
    }
  }, []);

  function cleanCart(){
    if(window.confirm('Você deseja realmente limpar o carrinho? Esta operação não pode ser desfeita!')){
        localStorage.removeItem('SuperWall-cart');
        setCart([]);
    }
  }

  return (
    <Container>
        <Header></Header>

        <SessionHeader title={'CARRINHO DE COMPRAS'} />

        {showSideBar ? <Sidebar /> : <></>}

        <h1>Carrinho de Compras</h1>

        <div onClick={cleanCart}>
            <SubmitButton children={'Limpar carrinho de compras'} />
        </div>

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

    padding: 70px 0 60px 0;
    background-color: #f3f3f3;

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
