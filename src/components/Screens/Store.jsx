import styled from "styled-components";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Logo from "../Common/Logo";

export default function Store() {
  return (
    <Container>
      <Header></Header>
      <Logo />
      <Footer></Footer>
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
