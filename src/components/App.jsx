import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "../GlobalStyles";
import UserContext from "../Context/UserContext";

import Login from "./Screens/Login";
import Register from "./Screens/Register";

import { useEffect, useState } from "react";
import Store from "./Screens/Store";
import Product from "./Screens/Product";

export default function App() {
  const [userData, setUserData] = useState({ token: null });
  const [showSideBar, setShowSideBar] = useState(false);

  useEffect(() => {
    //console.log(userData);
  }, [userData]);

  return (
    <Container>
      <BrowserRouter>
        <UserContext.Provider
          value={{
            userData,
            setUserData,
            showSideBar,
            setShowSideBar,
          }}
        >
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Store />}></Route>
            <Route path="/account/login" element={<Login />}></Route>
            <Route path="/account/register" element={<Register />}></Route>
            <Route path="/products/:id" element={<Product />}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </Container>
  );
}

const Container = styled.div`
  & {
    background-color: var(--azul-base);

    flex-direction: column;
  }
`;
