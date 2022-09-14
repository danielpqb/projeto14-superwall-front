import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getProducts } from "../../../services/superwallAPI";
import Product from "./Product";

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <Container>
      {products.map((product, index) => {
        return (
          <React.Fragment key={index}>
            <Product productData={product} onClick={() => {}} />
          </React.Fragment>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  & {
    width: calc(100vw - (100vw - 100%));

    flex-wrap: wrap;

    padding: 20px 0px;

    margin: 60px 0px;

    font-weight: 700;
    font-size: 15px;
  }
`;
