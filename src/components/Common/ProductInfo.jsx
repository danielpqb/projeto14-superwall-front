import styled from "styled-components";
import Price from "./Price";
import dayjs from "dayjs";
import SubmitButton from "./SubmitButton";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import UserContext from "../../Context/UserContext";

export default function ProductInfo({ productData }) {
  const { cart, setCart, setAlert } = useContext(UserContext);
  const navigate = useNavigate();
  const now = dayjs(Date.now());
  const { description, price, imgSrc } = productData;

  useEffect(() => {
    if (localStorage.getItem("SuperWall-cart") !== null) {
      setCart(JSON.parse(localStorage.getItem("SuperWall-cart")));
    }
  }, [setCart]);

  function addToCart() {
    const repeatedProduct = cart.find(
      (product) => product._id === productData._id
    );

    let newCart;
    if (!repeatedProduct) {
      newCart = [...cart, { ...productData, qnt: 1 }];
    } else {
      repeatedProduct.qnt += 1;
      newCart = [...cart];
    }

    setCart(newCart);
    localStorage.setItem("SuperWall-cart", JSON.stringify(newCart));
  }

  return (
    <Container>
      <Description>{description}</Description>

      <ImageBox>
        <img src={imgSrc} alt="" />
      </ImageBox>

      <Price price={price} />

      <Inventory>Estoque disponível</Inventory>

      <Shipping>
        <ion-icon name="rocket-outline"></ion-icon>
        Chegará grátis entre os dias {now.add(1, "day").format("DD")}/
        {now.format("MM")} e {now.add(3, "day").format("DD")}/{now.format("MM")}
      </Shipping>

      <Buttons>
        <SubmitButton onClick={() => {}}>Comprar agora</SubmitButton>
        <SubmitButton
          onClick={() => {
            addToCart();
            setAlert({
              show: true,
              message: "Produto adicionado ao carrinho.",
            });
          }}
        >
          Adicionar ao carrinho
        </SubmitButton>
        <SubmitButton
          onClick={() => {
            navigate(-1);
          }}
        >
          Voltar
        </SubmitButton>
      </Buttons>
    </Container>
  );
}

const Container = styled.div`
  & {
    flex-direction: column;

    justify-content: flex-start;

    width: calc(100% - 10px);
    min-height: calc(100vh - 140px);

    padding: 15px;
    margin: 70px 0px;

    font-weight: 700;
    font-size: 15px;

    background: #ffffff;

    border-radius: 14px;

    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  }
`;

const ImageBox = styled.div`
  & {
    height: 300px;
  }

  img {
    border-radius: 12px;
    object-fit: contain;
  }
`;

const Description = styled.div`
  & {
    justify-content: flex-start;
    color: black;
  }
`;

const Shipping = styled.div`
  & {
    justify-content: flex-start;

    margin: 5px 0px;

    color: #00a650;
  }

  ion-icon {
    color: #00a650;
    font-size: 22px;

    margin-right: 5px;
  }
`;

const Inventory = styled.div`
  & {
    justify-content: flex-start;
    color: black;

    margin: 5px 0px;

    font-weight: 400;
  }
`;

const Buttons = styled.div`
  & {
    flex-direction: column;
    margin-top: 15px;
  }

  button {
    margin: 5px 0px;
    font-weight: 500;
  }

  button:nth-child(2) {
    background-color: #a7d6f5;
    color: var(--azul-destaque);
  }

  button:nth-child(3) {
    background-color: #ececec;
    color: #505050;
  }
`;
