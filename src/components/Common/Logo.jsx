import styled from "styled-components";

import logo from "../../assets/img/logo.svg";

export default function Logo() {
  return (
    <Container>
      <img src={logo} alt="" />
    </Container>
  );
}

const Container = styled.div`
  img {
    width: 70%;
    padding-bottom: 40px;
  }
`;
