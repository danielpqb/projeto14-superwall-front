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
        <ion-icon name="home-outline"></ion-icon>
      </Icon>

      <Icon
        onClick={() => {
          navigate("/");
        }}
      >
        <ion-icon name="notifications-outline"></ion-icon>
      </Icon>

      <Icon
        onClick={() => {
          navigate("/");
        }}
      >
        <ion-icon name="receipt-outline"></ion-icon>
      </Icon>

      <Icon
        onClick={() => {
          navigate("/");
        }}
      >
        <ion-icon name="person-circle-outline"></ion-icon>
      </Icon>
    </Container>
  );
}

const Container = styled.div`
  & {
    height: 60px;
    padding: 10px;

    background: #065183;

    width: 100vw;

    position: fixed;
    bottom: 0;
    left: 0;
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
  ion-icon {
    font-size: 30px;
  }
`;
