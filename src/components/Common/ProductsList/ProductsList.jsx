import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getAllProducts } from "../../../services/superwallAPI";
import Orders from "../../Screens/Orders";
import SessionHeader from "../SessionHeader";
import Product from "./Product";

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, [setProducts]);

  return (
    <Container>
      {!loading ? (
        products.length > 0 ? (
          <>
            <SessionHeader title={"LOJA"} margin={"0px 20px 20px 20px"} />
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
          </>
        ) : (
          <Message>Nenhum produto encontrado.</Message>
        )
      ) : (
        <Loading>
          <ThreeDots
            align="center"
            width="80"
            color="var(--azul-destaque)"
            ariaLabel="three-dots-loading"
          />
        </Loading>
      )}
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

const Loading = styled.div`
  & {
    position: fixed;

    top: 0;
    left: 0;

    margin: auto;
  }
`;

const Message = styled.div`
  & {
    color: black;
    font-size: 22px;
    text-align: center;

    position: fixed;
    top: 0;
    left: 0;

    margin: auto;
    padding: 0px 10px;
  }
`;
