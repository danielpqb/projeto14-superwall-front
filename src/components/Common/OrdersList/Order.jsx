import React from "react";
import styled from "styled-components";

export default function Order({ orderData, onClick }) {
  const { address, payment, _id, total } = orderData;

  return (
    <Container>
      <OrderInfo onClick={onClick}>
        <Header>
          <div>{"17 de agosto"}</div>
          <div>{_id}</div>
        </Header>

        <Details>
          <Line>
            <div>Endereço:</div>
            <div>{address}</div>
          </Line>
          <Line>
            <div>Cartão (final):</div>
            <div>{payment.creditCardNumber.replace(/(.*)(\d{4})/g, "$2")}</div>
          </Line>
          <Line>
            <div>Recebedor:</div>
            <div>{payment.paymentName}</div>
          </Line>
          <Line>
            <div>Produtos:</div>
          </Line>
        </Details>

        {orderData.order.map((order, index) => {
          return (
            <React.Fragment key={index}>
              <Product>
                <img src={order.imgSrc} alt="" />
                <ProductInfo>
                  <Line>
                    <div>Descrição:</div>
                    <div>{order.description}</div>
                  </Line>
                  <Line>
                    <div>Categoria:</div>
                    <div>{order.category}</div>
                  </Line>
                  <Line>
                    <div>Qnt:</div>
                    <div>{order.qnt}</div>
                  </Line>
                  <Line>
                    <div>Preço:</div>
                    <div>$ {Number(order.price * order.qnt).toFixed(2)}</div>
                  </Line>
                </ProductInfo>
              </Product>
            </React.Fragment>
          );
        })}

        <Total>Total: $ {Number(total).toFixed(2)}</Total>
      </OrderInfo>
    </Container>
  );
}

const Container = styled.div`
  & {
    position: relative;
    flex-direction: column;

    width: calc(100% - 10px);
    height: fit-content;

    padding: 10px;
    margin-bottom: 20px;

    font-weight: 700;
    font-size: 15px;

    background: #ffffff;

    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 14px;

    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  }

  div {
    color: black;
  }
`;

const OrderInfo = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: column;
`;

const Details = styled.div`
  & {
    flex-direction: column;
  }
`;

const Header = styled.div`
  & {
    justify-content: space-between;

    padding-bottom: 10px;

    border-bottom: 5px solid rgba(0, 0, 0, 0.25);
  }

  div {
    font-weight: 500;

    width: fit-content;
  }

  div:nth-child(2) {
    font-size: 12px;
  }
`;

const Line = styled.div`
  & {
    justify-content: flex-start;
    padding-top: 10px;
  }

  &:not(:last-child) {
    padding: 10px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  }

  div {
    width: fit-content;
  }

  div:nth-child(1) {
    font-size: 12px;
  }

  div:nth-child(2) {
    margin-left: 5px;
    font-weight: 500;

    display: block;
    overflow: hidden;
    max-height: 40px;
    line-height: 20px;
  }
`;

const Total = styled.div`
  & {
    font-size: 18px;

    margin-top: 5px;

    font-weight: bold;

    padding-top: 10px;

    border-top: 3px solid rgba(0, 0, 0, 0.25);
  }
`;

const Product = styled.div`
  & {
    justify-content: flex-start;

    border-radius: 10px;

    margin: 5px 0px;

    padding: 10px;

    border: 1px solid rgba(0, 0, 0, 0.25);
  }

  img {
    width: 100px;
    object-fit: contain;
  }
`;

const ProductInfo = styled.div`
  & {
    flex-direction: column;

    align-items: flex-start;
  }
`;
