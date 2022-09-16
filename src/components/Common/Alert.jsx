import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../Context/UserContext";
import SubmitButton from "./SubmitButton";

export default function Alert() {
  const { alert, setAlert } = useContext(UserContext);

  return (
    <>
      <Blur />

      <Container>
        <Message>{alert.message}</Message>
        <SubmitButton
          onClick={() => {
            setAlert({ show: false });
          }}
        >
          Ok
        </SubmitButton>
      </Container>
    </>
  );
}

const Container = styled.div`
  && {
    position: fixed;

    flex-direction: column;

    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    z-index: 21;

    border-radius: 10px;
    padding: 15px;

    width: 90vw;
    height: 200px;

    background: rgba(250, 250, 250, 0.98);
  }
`;

const Blur = styled.div`
  && {
    position: fixed;
    top: 0;
    left: 0;

    z-index: 20;

    background: rgba(0, 0, 0, 0.7);
    filter: blur(1);
  }
`;

const Message = styled.div`
  && {
    color: black;
    font-size: 20px;
  }
`;
