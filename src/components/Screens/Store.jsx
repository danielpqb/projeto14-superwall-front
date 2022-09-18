import styled from "styled-components";
import { useContext } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import ProductsList from "../Common/ProductsList/ProductsList";
import Sidebar from "../Common/Sidebar";

import UserContext from "../../Context/UserContext";

export default function Store() {
  const { showSideBar } = useContext(UserContext);

  return (
    <Container>
      <Header />

      {showSideBar ? <Sidebar /> : <></>}

      <ProductsList />

      <Footer />
    </Container>
  );
}

const Container = styled.div`
  & {
    width: calc(100vw - (100vw - 100%));
    min-height: 100vh;

    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    font-weight: 700;
    font-size: 15px;

    background-color: #f3f3f3;
  }
`;
