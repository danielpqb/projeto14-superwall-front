import React, { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import UserContext from "../../../Context/UserContext";
import { getAllOrders } from "../../../services/superwallAPI";
import SessionHeader from "../SessionHeader";
import Order from "./Order";

export default function OrdersList() {
  const { userData } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (userData.token) {
      getAllOrders(userData.token, userData.email).then((res) => {
        setOrders(res.data.reverse());
        setLoading(false);
      });
    }
  }, [userData, setOrders]);

  return (
    <Container>
      {!loading ? (
        orders.length > 0 ? (
          <>
            <SessionHeader
              title={"MEUS PEDIDOS"}
              margin={"0px 20px 20px 20px"}
            />
            {orders.map((order, index) => {
              return (
                <React.Fragment key={index}>
                  <Order orderData={order} />
                </React.Fragment>
              );
            })}
          </>
        ) : (
          <Message>Você ainda não possui um histórico de compras.</Message>
        )
      ) : userData.token ? (
        <Loading>
          <ThreeDots
            align="center"
            width="80"
            color="var(--azul-destaque)"
            ariaLabel="three-dots-loading"
          />
        </Loading>
      ) : (
        <Message>Você não está conectado a uma conta.</Message>
      )}
    </Container>
  );
}

const Container = styled.div`
  & {
    width: calc(100vw - (100vw - 100%));

    flex-direction: column;

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
