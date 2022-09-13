import styled from "styled-components";

export default function Product({ productData, onClick }) {
  const { description, price, imgSrc } = productData;
  return (
    <Container onClick={onClick}>
      <ImageBox>
        <img src={imgSrc} alt="" />
      </ImageBox>

      <Details>
        <h1>{description}</h1>
        <h2>$ {price.toFixed(2)}</h2>
      </Details>

      <AddToCart>
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
    color: black;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h1 {
    font-size: 12px;
  }

  h2 {
    font-family: "Roboto";
    font-weight: bold;
    font-size: 16px;
  }
`;

const AddToCart = styled.div`
  & {
    position: absolute;
    top: 5px;
    right: 5px;

    width: 30px;
    height: 30px;
  }

  ion-icon {
    font-size: 30px;
    color: var(--azul-base);
  }
`;
