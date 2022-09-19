import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../Context/UserContext";

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

  const [validateLength, setValidateLength] = useState(false);
  const [validateNumbers, setValidateNumbers] = useState(false);
  const [validateUpperCase, setValidateUpperCase] = useState(false);
  const [validateSymbols, setValidateSymbols] = useState(false);
  const [validateConfirmation, setValidateConfirmation] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const { setAlert } = useContext(UserContext);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!(validateLength && validateNumbers && validateUpperCase && validateSymbols && validateConfirmation)) {
      alert("Senha inválida!");
      return;
    }

    try {
      await postSignUp(form);
      setAlert({ show: true, message: "Usuário cadastrado com sucesso" });
    } catch (error) {
      alert(`Erro ${error.response.status}: ${error.response.data.message}`);
      return;
    }

    navigate("/account/login");
  }

  function validatePassword(e) {
    e.preventDefault();
    const password = e.target.value;

    setValidateLength(password.length >= 5);
    setValidateNumbers(password.match(/\d+/) !== null);
    setValidateUpperCase(password.match(/[A-Z]/) !== null);
    setValidateSymbols(password.match(/[^A-Z a-z0-9]/) !== null);
    setValidateConfirmation(password === form.confirmPassword);
  }

  function validateConfirmPassword(e) {
    e.preventDefault();
    const confirmPassword = e.target.value;
    setValidateConfirmation(confirmPassword === form.password);
  }

  return (
    <Container>
      <Logo />

      <RegisterForm action="" onSubmit={handleSubmit}>
        <InputBox
          name="name"
          placeholder="Nome"
          type="name"
          onChange={(e) => {
            setForm({ ...form, name: e.target.value });
          }}
          value={form.name}
          required
        />
        <InputBox
          name="email"
          placeholder="Email"
          type="email"
          onChange={(e) => {
            setForm({ ...form, email: e.target.value });
          }}
          value={form.email}
          required
        />
        <InputBox
          name="password"
          type={showPassword? 'text' : 'password'}
          placeholder="Senha"
          onChange={(e) => {
            setForm({ ...form, password: e.target.value });
            validatePassword(e);
          }}
          value={form.password}
        />

        {form.password.length === 0?
        <></> :
        <ValidationBox>
          {showPassword?
            <h2 onClick={() => setShowPassword(false)}>Ocultar senha</h2> :
            <h2 onClick={() => setShowPassword(true)}>Exibir senha</h2>
          }
            
          {validateLength?
            <h3 style={{ color: "lightgreen" }}>• Possui 5 caractéres ou mais</h3> :
            <h3 style={{ color: "red" }}>• Possui 5 caractéres ou mais</h3>
          }
          {validateNumbers?
            <h3 style={{ color: "lightgreen" }}>• Possui números</h3> :
            <h3 style={{ color: "red" }}>• Possui números</h3>
          }
          {validateUpperCase?
            <h3 style={{ color: "lightgreen" }}>• Possui letras maiúsculas</h3> :
            <h3 style={{ color: "red" }}>• Possui letras maiúsculas</h3>
          }
          {validateSymbols?
            <h3 style={{ color: "lightgreen" }}>• Possui caractéres especiais</h3> :
            <h3 style={{ color: "red" }}>• Possui caractéres especiais</h3>
          }
        </ValidationBox>
        }

        <InputBox
          name="confirmPassword"
          type={showPassword? 'text' : 'password'}
          placeholder="Confirme a senha"
          onChange={(e) => {
            setForm({ ...form, confirmPassword: e.target.value });
            validateConfirmPassword(e);
          }}
          value={form.confirmPassword}
        />

        {form.password.length === 0?
        <></> :
        <ValidationBox>
          {validateConfirmation?
            <h3 style={{ color: "lightgreen" }}>• As senhas conferem</h3> :
            <h3 style={{ color: "red" }}>• As senhas não conferem</h3>
          }
        </ValidationBox>
        }

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

const ValidationBox = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h2 {
    cursor: pointer;
    font-weight: 400;
    font-size: 14px;
    margin-top: 5px;
    text-decoration: underline;
    &:hover{
      filter:brightness(0.6);
    }
  }

  h3 {
    font-weight: 400;
    font-size: 14px;
    margin-top: 5px;
  }
`