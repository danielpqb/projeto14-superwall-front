import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Sidebar from "../Common/Sidebar";

import UserContext from "../../Context/UserContext";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../../services/superwallAPI";
import ProductInfo from "../Common/ProductInfo";

export default function Product() {
  const { id } = useParams();
  const { showSideBar } = useContext(UserContext);

  const [productData, setProductData] = useState({});

  useEffect(() => {
    getOneProduct(id).then((res) => {
      setProductData(res.data);
    });
  }, [id]);

  return (
    <Container>
      <Header />

      {showSideBar ? <Sidebar /> : <></>}

      <ProductInfo productData={productData} />

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
`;
