import styled from "styled-components";
import { useContext, useEffect } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Sidebar from "../Common/Sidebar";

import UserContext from "../../Context/UserContext";

export default function Confirmation() {
  const { showSideBar, setCart } = useContext(UserContext);

  useEffect(() => {
    localStorage.removeItem("SuperWall-cart");
    setCart([]);
  }, [setCart]);

  return (
    <Container>
      <Header></Header>

      {showSideBar ? <Sidebar /> : <></>}

      <h1>Confirmação de Compra</h1>

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
