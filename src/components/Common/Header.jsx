import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import InputBox from "./InputBox";

export default function Header() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  return (
    <Container>
      <Icon onClick={() => {}}>
        <ion-icon name="menu-outline"></ion-icon>
      </Icon>

      <InputBox
        name={"search"}
        placeholder={"Pesquisar"}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
        height={"40px"}
      />

      <Icon
        onClick={() => {
          navigate("/cart");
        }}
      >
        <ion-icon name="person-circle-outline"></ion-icon>
      </Icon>
    </Container>
  );
}

const Container = styled.div`
  & {
    height: 70px;
    justify-content: space-between;

    background: #065183;

    width: 100vw;

    position: fixed;
    top: 0;
    left: 0;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  h1 {
    min-width: fit-content;
    font-weight: 700;
    font-size: 26px;

    padding: 20px 0px;
  }
`;

const Icon = styled.div`
  & {
    width: fit-content;
    padding: 0px 20px;
  }
  ion-icon {
    font-size: 30px;
  }
`;
