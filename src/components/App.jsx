import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "../GlobalStyles";
import UserContext from "../Context/UserContext";

import Login from "./Screens/Login";
import Register from "./Screens/Register";

import { useEffect, useState } from "react";
import Store from "./Screens/Store";
import Product from "./Screens/Product";

import Cart from "./Screens/Cart";
import Alert from "./Common/Alert";
import Orders from "./Screens/Orders";
import Notifications from "./Screens/Notifications";

export default function App() {
  const [userData, setUserData] = useState({ token: null });
  const [showSideBar, setShowSideBar] = useState(false);
  const [cart, setCart] = useState([]);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    console.log(userData);
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
            cart,
            setCart,
            alert,
            setAlert,
          }}
        >
          <GlobalStyle />
          {alert.show && <Alert />}
          <Routes>
            <Route path="/" element={<Store />}></Route>
            <Route path="/account/login" element={<Login />}></Route>
            <Route path="/account/register" element={<Register />}></Route>
            <Route path="/products/:id" element={<Product />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/orders" element={<Orders />}></Route>
            <Route path="/notifications" element={<Notifications />}></Route>
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
