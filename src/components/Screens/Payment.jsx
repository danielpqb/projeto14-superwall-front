import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Sidebar from "../Common/Sidebar";
import SessionHeader from "../Common/SessionHeader";
import InputBox from "../Common/InputBox";

import UserContext from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";

import { getUserByToken, postOneOrder } from "../../services/superwallAPI";

export default function Payment() {
  const navigate = useNavigate();

  const { userData, setUserData, showSideBar, cart, setCart, cartTotal } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [checkDelivery, setCheckDelivery] = useState(true);
  const [checkPaymentDivision, setCheckPaymentDivision] = useState(1);
  const [finalValue, setFinalValue] = useState(cartTotal);
  const paymentDivision = [1, 2, 3];

  const [paymentForm, setPaymentForm] = useState({
    paymentName: "",
    creditCardNumber: "",
    address: "",
  });

  useEffect(() => {
    const localToken = localStorage.getItem("userToken");

    if (localToken) {
      getUserByToken(localToken).then((res) => {
        setUserData(res.data);
      });
    } else {
      navigate('/account/login');
    }
  }, [setUserData, navigate])

  useEffect(() => {
    if (localStorage.getItem("SuperWall-cart") !== null) {
      setCart(JSON.parse(localStorage.getItem("SuperWall-cart")));
    }
    if (cartTotal === 0){
      navigate('/cart');
    }
  }, [setCart, cartTotal, navigate]);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    const finalOrderObj = {
      email: userData.email,
      name: userData.name,
      address: paymentForm.address,
      payment: {
        paymentName: paymentForm.paymentName,
        creditCardNumber: paymentForm.creditCardNumber,
      },
      order: cart,
      total: finalValue.toFixed(2),
    }

    try {
      await postOneOrder(userData.token, finalOrderObj);
      localStorage.removeItem("SuperWall-cart");
      setCart([]);
      navigate('/confirmation');
    } catch (error) {
      alert(`Erro ${error.response.status}: ${error.response.data}`)
    }

    setLoading(false);
  }

  function handleDeliveryCheck() {
    setCheckDelivery(!checkDelivery);
    if (!checkDelivery) {
      setFinalValue(cartTotal);
    } else {
      setFinalValue(cartTotal + 12.99);
    }
  }

  function CardCheck({i}) {
    return (
      <CreditCardCheck>
        <input
          type="checkbox"
          checked={checkPaymentDivision === i ? true : false}
          onChange={() => setCheckPaymentDivision(i)}
        />
        <label>{i}x</label>
      </CreditCardCheck>
    )
  }

  return (
    <Container>
      <Header></Header>

      <SessionHeader title={"DADOS DE PAGAMENTO"} />

      {showSideBar ? <Sidebar /> : <></>}

      <RegisterForm action="" onSubmit={handleSubmit} id="paymentForm">

        <InputBox
          name="address"
          placeholder="Endereço de entrega"
          type="address"
          onChange={(e) => {
            setPaymentForm({ ...paymentForm, address: e.target.value });
          }}
          value={paymentForm.address}
        />

        <CheckBoxDivision>
          <h1>
            Selecione o método de entrega
          </h1>
          <DeliveryCheck>
            <input type="checkbox" checked={checkDelivery} onChange={handleDeliveryCheck}/>
            <label>Padrão: < br/> <b>Grátis</b> </label>
          </DeliveryCheck>
          <DeliveryCheck>
            <input type="checkbox" checked={!checkDelivery} onChange={handleDeliveryCheck}/>
            <label>Entrega Expressa: < br/> <b>R$ 12.99</b></label>
          </DeliveryCheck>
        </CheckBoxDivision>

        <InputBox
          name="name"
          placeholder="Nome como consta no cartão"
          type="name"
          onChange={(e) => {
            setPaymentForm({ ...paymentForm, paymentName: e.target.value });
          }}
          value={paymentForm.paymentName}
        />
        <InputBox
          name="creditCard"
          placeholder="Número do cartão"
          type="number"
          onChange={(e) => {
            setPaymentForm({ ...paymentForm, creditCardNumber: e.target.value });
          }}
          value={paymentForm.creditCardNumber}
        />

        <CheckBoxDivision>
          <h1>
            Total: <br /> <b>R$ {finalValue.toFixed(2)}</b>
          </h1>
          {paymentDivision.map((value, index) => <CardCheck key={index} i={value} />)}
          <h1>
            {checkPaymentDivision}x de <br /> <b>R$ {(finalValue/checkPaymentDivision).toFixed(2)}</b>
          </h1>
        </CheckBoxDivision>

      </RegisterForm>

      <ToConfirmation>
        <div>
          <Continue disabled={loading} type="submit" form="paymentForm">
            Concluir Compra
          </Continue>
          <Cancel disabled={loading} onClick={() => navigate("/cart")}>Voltar</Cancel>
        </div>
      </ToConfirmation>

      <Footer></Footer>
    </Container>
  );
}

const Container = styled.div`
  width: calc(100vw - (100vw - 100%));
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  font-weight: 700;
  font-size: 15px;

  padding: 70px 0 180px 0;
  background-color: #f3f3f3;

  h1 {
    color: black;
  }
`;

const ToConfirmation = styled.div`
  width: 100vw;
  height: 100px;
  background-color: white;
  padding: 0 20px;

  position: fixed;
  bottom: 60px;
  left: 0;

  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: var(--azul-base);
    font-weight: 500;
    font-size: 16px;
  }

  h2 {
    color: var(--azul-base);
    font-weight: 900;
    font-size: 26px;
    margin-top: 10px;
  }

  & > div {
    width: 40%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

const Continue = styled.button`
  cursor: pointer;
  background: var(--azul-destaque);
  height: 30px;
  border-radius: 5px;

  font-weight: 700;
  font-size: 18px;
  color: white;

  &:hover {
    filter: brightness(1.4);
  }
`;

const Cancel = styled.button`
  cursor: pointer;
  height: 20px;
  border-radius: 5px;

  font-weight: 400;
  font-size: 14px;
  color: var(--azul-base);
  margin-top: 10px;

  &:hover {
    filter: brightness(0.6);
    font-weight: 600;
  }
`;

const RegisterForm = styled.form`
    flex-direction: column;

    width: 100%;
    height: 50%;

    text-align: center;
    padding: 0 20px;
`;

const CheckBoxDivision = styled.div`
  height: 100%;
  height: 60px;
  margin: 10px 0px;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    width: 140px;
    font-weight: 400;
    font-size: 14px;
    color: var(--azul-base);

    b{
      font-weight: 600;
      font-size: 16px;
      color: var(--azul-base);
    }
  }

  input {
    height: 12px;
    width: 12px;
  }

  label {
    color: var(--azul-base);
    font-weight: 400;
    font-size: 12px;
    margin: 0 5px;

    b{
      font-weight: 600;
      font-size: 14px;
      color: var(--azul-base);
    }
  }
`

const DeliveryCheck = styled.div`
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const CreditCardCheck = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`