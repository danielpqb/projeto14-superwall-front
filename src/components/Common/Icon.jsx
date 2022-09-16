import styled from "styled-components";

export default function Icon({ onClick, name, size }) {
  return (
    <Container onClick={onClick} size={size}>
      <ion-icon name={name}></ion-icon>
    </Container>
  );
}

const Container = styled.div`
  & {
    cursor: pointer;
    width: fit-content;
  }

  ion-icon {
    font-size: ${({ size }) => (size ? size + "px" : "30px")};
  }

  &:hover {
    filter: brightness(0.6);
  }
`;
