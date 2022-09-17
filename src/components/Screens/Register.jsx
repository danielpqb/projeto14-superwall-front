import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { postSignUp } from "../../services/superwallAPI";
import InputBox from "../Common/InputBox";
import Logo from "../Common/Logo";
import SubmitButton from "../Common/SubmitButton";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Password and ConfirmPassword must be equal!");
      return;
    }

    try {
      await postSignUp(form);
      alert('Usuário cadastrado com sucesso!');
    } catch (error) {
      alert(`Erro ${error.response.status}: ${error.response.data.message}`);
      return;
    }

    navigate("/account/login");
  }

  return (
    <Container>
      <Logo />

      <RegisterForm action="" onSubmit={handleSubmit}>
        <InputBox
          name="name"
          placeholder="Nome"
          onChange={(e) => {
            setForm({ ...form, name: e.target.value });
          }}
          value={form.name}
        />
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
        <InputBox
          name="confirmPassword"
          type="password"
          placeholder="Confirme a senha"
          onChange={(e) => {
            setForm({ ...form, confirmPassword: e.target.value });
          }}
          value={form.confirmPassword}
        />

        <SubmitButton>Cadastrar</SubmitButton>
      </RegisterForm>

      <Link to={"/account/login"}>Já tem uma conta? Entre agora!</Link>
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

  h1 {
    margin: 30px 0px;
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
