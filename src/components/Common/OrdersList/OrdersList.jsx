import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../../../Context/UserContext";
import { getAllOrders } from "../../../services/superwallAPI";
import Order from "./Order";

export default function OrdersList() {
  const { userData } = useContext(UserContext);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (userData.token) {
      getAllOrders(userData.token, userData.email).then((res) => {
        setOrders(res.data);
        console.log(res.data);
      });
    }
  }, [userData, setOrders]);

  return (
    <Container>
      {orders.map((order, index) => {
        return (
          <React.Fragment key={index}>
            <Order orderData={order} />
          </React.Fragment>
        );
      })}
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
