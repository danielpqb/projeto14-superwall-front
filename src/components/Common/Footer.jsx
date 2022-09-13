import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <Container>
      <div
        onClick={(e) => {
          navigate("/new-income");
        }}
      >
        <ion-icon name="add-circle-outline"></ion-icon>
        <h1>Nova entrada</h1>
      </div>
      <div
        onClick={(e) => {
          navigate("/new-spent");
        }}
      >
        <ion-icon name="remove-circle-outline"></ion-icon>
        <h1>Nova saída</h1>
      </div>
    </Container>
  );
}

const Container = styled.div`
  & {
    height: 110px;
    padding-top: 10px;
  }

  ion-icon {
    font-size: 22px;
  }

  h1 {
    font-weight: 700;
    font-size: 17px;

    width: 50px;
  }

  div {
    flex-direction: column;

    justify-content: space-between;
    align-items: flex-start;

    padding: 10px;
    margin: 5px;

    background: #a328d6;
    border-radius: 5px;
  }
`;
