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
import { getUserByToken } from "../services/superwallAPI";

import Payment from "./Screens/Payment";
import Confirmation from "./Screens/Confirmation";

export default function App() {
  const [userData, setUserData] = useState({});
  const [showSideBar, setShowSideBar] = useState(false);
  const [cart, setCart] = useState([]);
  const [alert, setAlert] = useState({});
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const localToken = localStorage.getItem("userToken");

    if (localToken) {
      getUserByToken(localToken).then((res) => {
        setUserData(res.data);
      });
    }
  }, [setUserData]);

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
            cartTotal,
            setCartTotal,
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
            <Route path="/payment" element={<Payment />}></Route>
            <Route path="/confirmation" element={<Confirmation />}></Route>
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
