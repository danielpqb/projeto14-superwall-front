import styled from "styled-components";
import { useContext } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Sidebar from "../Common/Sidebar";

import UserContext from "../../Context/UserContext";

export default function Notifications() {
  const { showSideBar } = useContext(UserContext);

  return (
    <Container>
      <Header />
      {showSideBar ? <Sidebar /> : <></>}
      <div>Em breve alertas de promoções especiais para você!</div>
      <Footer />
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

  & > div {
    color: black;
    font-size: 22px;
    text-align: center;
  }
`;
