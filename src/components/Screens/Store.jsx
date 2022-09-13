import styled from "styled-components";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import ProductsList from "../Common/ProductsList/ProductsList";

export default function Store() {
  return (
    <Container>
      <Header></Header>

      <ProductsList />

      <Footer></Footer>
    </Container>
  );
}

const Container = styled.div`
  & {
    width: calc(100vw - (100vw - 100%));
    min-height: 100vh;

    flex-direction: column;

    font-weight: 700;
    font-size: 15px;

    background-color: #f3f3f3;
  }
`;
