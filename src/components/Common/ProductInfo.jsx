import styled from "styled-components";
import Price from "./Price";
import dayjs from "dayjs";

export default function ProductInfo({ productData }) {
  const now = dayjs(Date.now());
  const { description, price, imgSrc } = productData;
  return (
    <Container>
      <Description>{description}</Description>

      <ImageBox>
        <img src={imgSrc} alt="" />
      </ImageBox>

      <Price price={price} />

      <Shipping>
        <ion-icon name="rocket-outline"></ion-icon>
        Chegará grátis entre {now.day()}/{now.month()} e{" "}
        {now.add(1, "day").day()}/{now.month()}
      </Shipping>
    </Container>
  );
}

const Container = styled.div`
  & {
    flex-direction: column;

    justify-content: flex-start;

    width: calc(100% - 10px);
    min-height: calc(100vh - 130px);

    padding: 15px;
    margin: 5px;

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
