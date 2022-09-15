import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <Container>
      <Icon
        onClick={() => {
          navigate("/");
        }}
      >
        <ion-icon name="home"></ion-icon>
      </Icon>

      <Icon
        onClick={() => {
          navigate("/");
        }}
      >
        <ion-icon name="notifications"></ion-icon>
      </Icon>

      <Icon
        onClick={() => {
          navigate("/");
        }}
      >
        <ion-icon name="receipt"></ion-icon>
      </Icon>

      <Icon
        onClick={() => {
          navigate("/cart");
        }}
      >
        <ion-icon name="cart"></ion-icon>
      </Icon>
    </Container>
  );
}

const Container = styled.div`
  & {
    height: 60px;
    padding: 10px;

    background: var(--azul-base);

    width: 100vw;

    position: fixed;
    bottom: 0;
    left: 0;

    z-index: 10;

    box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
  }

  ion-icon {
    font-size: 22px;
  }

  h1 {
    font-weight: 700;
    font-size: 17px;

    width: 50px;
  }
`;

const Icon = styled.div`
  cursor: pointer;
  ion-icon {
    font-size: 30px;
  }
  &:hover{
    filter: brightness(0.6)
  }
`;
