import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import InputBox from "./InputBox";

import UserContext from "../../Context/UserContext";

export default function Header() {
  const navigate = useNavigate();

  const { showSideBar, setShowSideBar } = useContext(UserContext);

  const [search, setSearch] = useState("");

  return (
    <Container>
      <Icon
        onClick={() => {
          setShowSideBar(!showSideBar);
        }}
      >
        <ion-icon name="menu"></ion-icon>
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
        <ion-icon name="person-circle"></ion-icon>
      </Icon>
    </Container>
  );
}

const Container = styled.div`
  & {
    height: 60px;
    justify-content: space-between;

    background: var(--azul-base);

    width: 100vw;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 2;

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
