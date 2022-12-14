import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import InputBox from "./InputBox";

import UserContext from "../../Context/UserContext";
import Icon from "./Icon";

export default function Header() {
  const navigate = useNavigate();

  const { showSideBar, setShowSideBar, userData, setUserData, alert, setAlert } = useContext(UserContext);

  const [search, setSearch] = useState("");

  function handleLoginLogout(){
    if (userData.token) {
      setAlert({
        ...alert,
        show: true,
        message: "Deseja fazer logout?",
        type: 1,
        doThis: () => {
          localStorage.removeItem("userToken");
          setUserData({});
          navigate('/')
        },
        color: "rgba(200,0,0)",
        icon: "alert-circle",
      })
    } else {
      navigate('/account/login')
    }
  }

  return (
    <Container>
      <Icon
        onClick={() => {
          setShowSideBar(!showSideBar);
        }}
        name={"menu"}
      />

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
        onClick={handleLoginLogout}
        name={"person-circle-outline"}
        size={36}
        auth={userData.token ? true : false}
      />
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

    z-index: 10;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
