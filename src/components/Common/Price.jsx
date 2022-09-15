import styled from "styled-components";

export default function Price({ price }) {
  const integer = Math.trunc(price);
  const decimal = Math.trunc((price % 1) * 100);

  return (
    <Container>
      <Currency>R$</Currency>
      <Integer>{price && integer}</Integer>
      <Decimal>{price && decimal}</Decimal>
    </Container>
  );
}

const Container = styled.div`
  & {
    justify-content: flex-start;
    margin: 5px 0px;
  }

  div {
    color: black;
    font-weight: 300;

    width: fit-content;

    justify-content: flex-start;
  }
`;

const Currency = styled.div`
  & {
    font-size: 26px;

    margin-right: 5px;
  }
`;

const Integer = styled.div`
  & {
    font-size: 32px;
    margin-right: 2px;
  }
`;

const Decimal = styled.div`
  & {
    align-self: flex-end;
    margin-bottom: 4px;
  }
`;
