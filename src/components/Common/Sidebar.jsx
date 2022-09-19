import styled from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import logoBlue from "../../assets/img/logo-blue.svg";
import UserContext from "../../Context/UserContext";

export default function Sidebar() {
  const navigate = useNavigate();

  const { setShowSideBar, userData } = useContext(UserContext);
  const loginMenu = { iconName: "person-circle", legend: "", route: "" };

  if (userData.name) {
    loginMenu.legend = "Bem-vindo, " + userData.name.split(" ")[0];
    loginMenu.route = "/";
  } else {
    loginMenu.legend = "Entre ou crie sua conta";
    loginMenu.route = "/login";
  }

  const menuItens = [
    loginMenu,
    { iconName: "notifications", legend: "Promoções", route: "/notifications" },
    { iconName: "receipt", legend: "Compras anteriores", route: "/orders" },
    { iconName: "cart", legend: "Carrinho de compras", route: "/cart" },
  ];

  const sessions = [
    { title: "Alimentos", route: "/" },
    { title: "Bebidas", route: "/" },
    { title: "Higiene", route: "/" },
    { title: "Produtos de Limpeza", route: "/" },
    { title: "Farmácia", route: "/" },
  ];

  function Item({ item }) {
    return (
      <StyledItem
        onClick={() => {
          setShowSideBar(false);
          navigate(item.route);
        }}
      >
        <div>
          <ion-icon name={item.iconName} />
        </div>

        <h2>{item.legend}</h2>
      </StyledItem>
    );
  }

  function Session({ session }) {
    return (
      <StyledSession
        onClick={() => {
          setShowSideBar(false);
          navigate(session.route);
        }}
      >
        <h2>{session.title}</h2>
      </StyledSession>
    );
  }

  return (
    <Container>
      <SideMenu>
        <SessionHeader>
          <img src={logoBlue} alt="" />
          <h3>SUPERWALL</h3>
        </SessionHeader>

        <MenuItens>
          {menuItens.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </MenuItens>

        <SessionHeader>
          <img src={logoBlue} alt="" />
          <h3>ESCOLHA UMA SESSÃO</h3>
        </SessionHeader>

        <Sessions>
          {sessions.map((session, index) => (
            <Session key={index} session={session} />
          ))}
        </Sessions>
      </SideMenu>

      <DarkTransparency onClick={() => setShowSideBar(false)} />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;

  padding: 70px 0 60px 0;

  display: flex;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 5;
`;

const SideMenu = styled.div`
  height: 100%;
  width: 70%;

  background-color: white;
  display: flex;
  flex-direction: column;
`;

const DarkTransparency = styled.div`
  height: 100%;
  width: 30%;

  background-color: rgba(0, 0, 0, 0.6);

  cursor: pointer;
`;

const MenuItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const StyledItem = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  cursor: pointer;

  h2 {
    color: var(--azul-base);
    font-weight: 600;
    font-size: 20px;
    margin-left: 18px;
  }

  div {
    background: var(--azul-base);
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }

  ion-icon {
    font-size: 22px;
  }

  &:hover {
    filter: brightness(1.4);
    h2 {
      font-weight: 800;
    }
  }
`;

const SessionHeader = styled.div`
  height: 80px;
  width: calc(100% - 40px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: var(--azul-base) 2px solid;
  margin: 20px;

  img {
    width: 35px;
  }

  h3 {
    color: var(--azul-base);
    font-weight: 900;
  }
`;

const Sessions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 20px;
`;

const StyledSession = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;

  h2 {
    color: var(--azul-base);
  }

  &:hover {
    filter: brightness(1.4);
    h2 {
      font-weight: 600;
    }
  }
`;
