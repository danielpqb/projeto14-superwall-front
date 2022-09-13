import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

export default function SubmitButton({ children, disabled }) {
  return (
    <Container>
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
    background: #a328d6;
    height: 50px;
    border-radius: 5px;

    font-weight: 700;
    font-size: 20px;

    color: #ffffff;
  }

  &:hover {
    opacity: 0.6;
  }
`;
