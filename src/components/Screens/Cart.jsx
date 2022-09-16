import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Sidebar from "../Common/Sidebar";
import SessionHeader from "../Common/SessionHeader";
import Icon from "../Common/Icon";

import UserContext from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { showSideBar, cart, setCart } = useContext(UserContext);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("SuperWall-cart") !== null) {
      setCart(JSON.parse(localStorage.getItem("SuperWall-cart")));
    }
    console.log(cart);
  }, []);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].price * cart[i].qnt;
    }
    setTotal(sum);
  }, [cart]);

  function cleanCart() {
    if (
      window.confirm(
        "Você deseja realmente limpar o carrinho? Esta operação não pode ser desfeita!"
      )
    ) {
      localStorage.removeItem("SuperWall-cart");
      setCart([]);
    }
  }

  function changeQntProduct(item, operation) {
    if (operation === "+") {
      item.qnt += 1;
    } else {
      item.qnt -= 1;
    }

    if (item.qnt === 0) {
      const newCart = cart.filter((product) => product._id !== item._id);
      setCart(newCart);
      localStorage.setItem("SuperWall-cart", JSON.stringify(newCart));
      return;
    }

    localStorage.setItem("SuperWall-cart", JSON.stringify(cart));
    setCart([...cart]);
  }

  function Product({ item }) {
    return (
      <StyledProduct>
        <ImageBox>
          <img src={item.imgSrc} alt="" />
        </ImageBox>

        <ProductInfo>
          <h1>Produto: {item.description}</h1>
          <h2>R$ {item.price.toFixed(2)}</h2>
          <h3>
            Quantidade:
            <div onClick={() => changeQntProduct(item, "-")}>
              <ion-icon name="remove-circle-outline"></ion-icon>
            </div>
            <b>{item.qnt}</b>
            <div onClick={() => changeQntProduct(item, "+")}>
              <ion-icon name="add-circle-outline"></ion-icon>
            </div>
          </h3>
        </ProductInfo>

        <ProductTotal>
          <h2>R$</h2>
          <h1>{(item.price * item.qnt).toFixed(2)}</h1>
        </ProductTotal>
      </StyledProduct>
    );
  }

  return (
    <Container>
      <Header></Header>

      <SessionHeader title={"CARRINHO DE COMPRAS"} />

      {showSideBar ? <Sidebar /> : <></>}

      {cart.map((item, index) => (
        <Product key={index} item={item} />
      ))}

      <ToPayment>
        <div>
          <h1>TOTAL</h1>
          <h2>R$ {total.toFixed(2)}</h2>
        </div>
        <div>
          <Continue
            onClick={() => {
              navigate("/payment");
            }}
          >
            Continuar
          </Continue>
          <Cancel onClick={cleanCart}>Limpar carrinho de compras</Cancel>
        </div>
      </ToPayment>

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
`;

const StyledProduct = styled.div`
  width: calc(100% - 40px);
  height: 90px;

  padding: 10px;
  margin: 10px 20px;

  background: #ffffff;

  border-radius: 5px;

  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImageBox = styled.div`
  width: 100px;

  img {
    height: 60px;
    width: 60px;
    border-radius: 12px;
    object-fit: contain;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 5px 10px;

  h1 {
    font-weight: 300;
    font-size: 12px;
    color: var(--azul-base);
    overflow-y: hidden;
  }

  h2 {
    font-weight: 600;
    font-size: 14px;
    color: var(--azul-base);
  }

  h3 {
    font-weight: 300;
    font-size: 12px;
    color: var(--azul-base);
    display: flex;
    align-items: center;

    b {
      font-weight: 600;
      font-size: 12px;
      color: var(--azul-base);
    }

    ion-icon {
      margin: 0 5px;
      cursor: pointer;
      font-size: 18px;
      color: var(--azul-base);
      border-radius: 50%;

      &:hover {
        background-color: var(--azul-base);
        color: white;
      }

      &:active {
        transform: translateY(2px);
      }
    }
  }
`;

const ProductTotal = styled.div`
  width: 100px;
  height: 60px;
  padding-left: 10px;
  border-left: var(--azul-base) 1px solid;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-weight: 700;
    font-size: 16px;
    color: var(--azul-base);
  }

  h2 {
    font-weight: 400;
    font-size: 14px;
    color: var(--azul-base);
  }
`;

const ToPayment = styled.div`
  width: 100vw;
  height: 100px;
  background-color: white;
  padding: 0 20px;

  position: fixed;
  bottom: 60px;
  left: 0;

  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: var(--azul-base);
    font-weight: 500;
    font-size: 16px;
  }

  h2 {
    color: var(--azul-base);
    font-weight: 900;
    font-size: 26px;
    margin-top: 10px;
  }

  & > div {
    width: 40%;
    display: flex;
    flex-direction: column;
  }
`;

const Continue = styled.button`
  cursor: pointer;
  background: var(--azul-destaque);
  height: 30px;
  border-radius: 5px;

  font-weight: 700;
  font-size: 18px;
  color: white;

  &:hover {
    filter: brightness(1.4);
  }
`;

const Cancel = styled.button`
  cursor: pointer;
  height: 20px;
  border-radius: 5px;

  font-weight: 400;
  font-size: 14px;
  color: var(--azul-base);
  margin-top: 10px;

  &:hover {
    filter: brightness(0.6);
    font-weight: 600;
  }
`;
