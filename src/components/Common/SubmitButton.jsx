import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

export default function SubmitButton({ children, disabled, onClick }) {
  return (
    <Container onClick={onClick}>
      {disabled ? (
        <ThreeDots
          height="13"
          width="51"
          color="#FFFFFF"
          ariaLabel="three-dots-loading"
        />
      ) : (
        <>{children}</>
      )}
    </Container>
  );
}

const Container = styled.button`
  & {
    background: var(--azul-destaque);
    height: 50px;
    border-radius: 5px;

    font-weight: 700;
    font-size: 20px;
  }
`;
