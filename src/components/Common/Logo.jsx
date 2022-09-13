import styled from "styled-components";

export default function Logo() {
  return (
    <Container>
      <h1>Superwall</h1>
    </Container>
  );
}

const Container = styled.div`
  h1 {
    font-family: "Saira Stencil One";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;

    padding: 20px 0px;
  }
`;
