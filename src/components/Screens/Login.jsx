import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import UserContext from "../../Context/UserContext";
import InputBox from "../Common/InputBox";
import Logo from "../Common/Logo";
import SubmitButton from "../Common/SubmitButton";
import { postSignIn } from "../../services/superwallAPI";

export default function Login() {
  const { userData, setUserData } = useContext(UserContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setIsSubmitDisabled(true);

    postSignIn(form)
      .then((res) => {
        const { token, email, name } = res.data;

        setUserData({
          ...userData,
          token: token,
          email: email,
          name: name,
        });
        navigate("/");
      })
      .catch((res) => {
        setIsSubmitDisabled(false);
        throw res;
      });
  }

  return (
    <Container>
      <Logo />

      <RegisterForm action="" onSubmit={handleSubmit}>
        <InputBox
          name="email"
          placeholder="Email"
          onChange={(e) => {
            setForm({ ...form, email: e.target.value });
          }}
          value={form.email}
        />
        <InputBox
          name="password"
          type="password"
          placeholder="Senha"
          onChange={(e) => {
            setForm({ ...form, password: e.target.value });
          }}
          value={form.password}
        />

        <SubmitButton disabled={isSubmitDisabled}>Entrar</SubmitButton>
      </RegisterForm>

      <Link to={"/account/register"}>Primeira vez? Cadastre-se!</Link>
    </Container>
  );
}

const Container = styled.div`
  & {
    width: calc(100vw - (100vw - 100%));
    min-height: 100vh;

    flex-direction: column;

    padding: 20px;

    font-weight: 700;
    font-size: 15px;

    color: #ffffff;
  }
`;

const RegisterForm = styled.form`
  & {
    flex-direction: column;

    width: 100%;
    height: 50%;

    text-align: center;
  }
`;
