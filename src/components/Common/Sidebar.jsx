import styled from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import logoBlue from "../../assets/img/logo-blue.svg";
import UserContext from "../../Context/UserContext";

export default function Sidebar() {

  const navigate = useNavigate();

  const { setShowSideBar } = useContext(UserContext);

  const menuItens = [
    {iconName: 'person-circle', legend: 'Entre ou crie sua conta', route:'/' },
    {iconName: 'notifications', legend: 'Promoções', route:'/' },
    {iconName: 'receipt', legend: 'Compras anteriores', route:'/' },
    {iconName: 'cart', legend: 'Carrinho de compras', route:'/' },
  ];

  const sessions = ["Alimentos",
    "Bebidas",
    "Higiene",
    "Produtos de Limpeza",
    "Farmácia"
  ]

  function Item({item}) {
    console.log(item)
    return (
      <StyledItem onClick={() => {
        alert(item.legend);
        setShowSideBar(false);
        navigate(item.route);
      }}>
        <div >
          <ion-icon name={item.iconName} />
        </div>

        <h2>{item.legend}</h2>
      </StyledItem>
    )
  }

  return (
    <Container>

      <SideMenu>

        <MenuItens>
          {menuItens.map((item, index) => <Item key={index} item={item} />)}
        </MenuItens>

        <SessionHeader>
          <img src={logoBlue} alt=""/>
          <h3>ESCOLHA UMA SESSÃO</h3>
        </SessionHeader>

        <Sessions>
          {sessions}
        </Sessions>
        
        
      </SideMenu>

      <DarkTransparency onClick={() => setShowSideBar(false)}/>
      
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

    z-index: 1;

`;

const SideMenu = styled.div`
    height: 100%;
    width: 70%;

    background-color: white;
    display: flex;
    flex-direction: column;
`

const DarkTransparency = styled.div`
  height: 100%;
  width: 30%;

  background-color: rgba(0,0,0,0.6);

  cursor: pointer;
`

const MenuItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top:20px;
`

const StyledItem = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  cursor: pointer;

  h2{
    color: var(--azul-base);
    font-weight: 600;
    font-size: 20px;
    margin-left: 18px;
  }

  div{
    background: var(--azul-base);
    height:40px;
    width:40px;
    border-radius:50%;
  }

  ion-icon {
    font-size: 22px;
  }

  &:hover {
    filter:brightness(1.40);
    h2 {
      font-weight: 800;
    }
  }
`
const SessionHeader = styled.div`
  height: 30px;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: var(--azul-base) 2px solid;
  margin: 0 20px;

  img {
    width: 35px;
  }

  h3{
    color: var(--azul-base);
    font-weight:900;
  }
`

const Sessions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding:20px;

  color: var(--azul-base);
`