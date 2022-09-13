import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "../GlobalStyles";
import UserContext from "../Context/UserContext";

import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Balance from "./Screens/Balance";
import NewIncome from "./Screens/NewIncome";
import NewSpent from "./Screens/NewSpent";

import { useEffect, useState } from "react";

export default function App() {
  const [userData, setUserData] = useState({ token: null });

  useEffect(() => {
    //console.log(userData);
  }, [userData]);

  return (
    <Container>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            {userData.token ? (
              <>
                <Route path="/balance" element={<Balance />}></Route>
                <Route path="/new-income" element={<NewIncome />}></Route>
                <Route path="/new-spent" element={<NewSpent />}></Route>
              </>
            ) : (
              <>
                <Route path="*" element={<Navigate to="/" />}></Route>
              </>
            )}
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </Container>
  );
}

const Container = styled.div`
  & {
    background-color: #8c11be;

    flex-direction: column;
  }
`;
