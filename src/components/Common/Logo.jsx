import styled from "styled-components";

export default function Logo() {
  return (
    <Container>
      <h1>MyWallet</h1>
    </Container>
  );
}

const Container = styled.div`
  h1 {
    font-family: "Saira Stencil One";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;

    padding: 20px 0px;
  }
`;
