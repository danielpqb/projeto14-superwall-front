import styled from "styled-components";
import { useContext, useEffect } from "react";
import UserContext from "../../../Context/UserContext";

export default function Product({ productData, onClick }) {
  const { description, price, imgSrc } = productData;
  const { cart, setCart, setAlert } = useContext(UserContext);

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
      <ProductInfo onClick={onClick}>
        <ImageBox>
          <img src={imgSrc} alt="" />
        </ImageBox>

        <Details>
          <h1>{description}</h1>
          <h2>$ {price.toFixed(2)}</h2>
        </Details>
      </ProductInfo>

      <AddToCart
        onClick={() => {
          addToCart();
          setAlert({ show: true, message: "Produto adicionado ao carrinho." });
        }}
      >
        <ion-icon name="add-circle"></ion-icon>
      </AddToCart>
    </Container>
  );
}

const Container = styled.div`
  & {
    position: relative;
    flex-direction: column;

    width: calc(50% - 10px);
    max-width: 150px;
    height: 200px;

    padding: 10px;
    padding-top: 0px;
    margin: 5px;

    font-weight: 700;
    font-size: 15px;

    background: #ffffff;

    border-radius: 14px;

    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  }
`;

const ProductInfo = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: column;

  &:hover {
    opacity: 0.6;
  }
`;

const ImageBox = styled.div`
  & {
    height: 150px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  }

  img {
    height: 100%;
    width: 100%;
    border-radius: 12px;
    object-fit: contain;
  }
`;

const Details = styled.div`
  & {
    flex-direction: column;
    height: 40px;

    padding-top: 5px;

    align-items: flex-start;
    justify-content: space-between;
  }

  h1,
  h2 {
    width: 100%;
    color: var(--azul-base);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h1 {
    font-size: 12px;
  }

  h2 {
    font-weight: bold;
    font-size: 16px;
  }
`;

const AddToCart = styled.div`
  cursor: pointer;
  z-index: 1;

  position: absolute;
  top: 5px;
  right: 5px;

  width: 30px;
  height: 30px;

  ion-icon {
    font-size: 30px;
    color: var(--azul-base);
  }

  &:hover {
    filter: brightness(1.4);
    width: 36px;
    height: 36px;
    top: 2px;
    right: 2px;

    ion-icon {
      font-size: 36px;
    }
  }
`;
