import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/img/logo.svg";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate('/')}>
      <img src={logo} alt="" />
    </Container>
  );
}

const Container = styled.div`
  cursor: pointer;
  img {
    width: 70%;
    padding-bottom: 40px;
  }
  &:hover{
    filter:
    brightness(0.6);
  }
`;
