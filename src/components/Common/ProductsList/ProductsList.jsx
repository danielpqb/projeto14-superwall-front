import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getAllProducts } from "../../../services/superwallAPI";
import Product from "./Product";

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res.data);
    });
  }, [setProducts]);

  return (
    <Container>
      {products.map((product, index) => {
        return (
          <React.Fragment key={index}>
            <Product
              productData={product}
              onClick={() => {
                navigate("/products/" + product._id, {
                  replace: false,
                  state: product,
                });
              }}
            />
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
