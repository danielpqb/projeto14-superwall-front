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
        <AlertIcon color={alert.color}>
          <ion-icon
            name={alert.icon ? alert.icon : "checkmark-circle"}
          ></ion-icon>
        </AlertIcon>

        <Message>{alert.message ? alert.message : "Alerta!"}</Message>

        {alert.type === 1 ? (
          <>
            <ColoredButton color={alert.color} fontColor={alert.fontColor}>
              <SubmitButton
                onClick={() => {
                  alert.doThis();
                  setAlert({});
                }}
              >
                Ok
              </SubmitButton>
            </ColoredButton>

            <ColoredButton color={"#ececec"} fontColor={"#505050"}>
              <SubmitButton
                onClick={() => {
                  setAlert({});
                }}
              >
                Cancelar
              </SubmitButton>
            </ColoredButton>
          </>
        ) : alert.type === 2 ? (
          <></>
        ) : (
          <>
            <ColoredButton color={alert.color} fontColor={alert.fontColor}>
              <SubmitButton
                onClick={() => {
                  setAlert({});
                }}
              >
                Ok
              </SubmitButton>
            </ColoredButton>
          </>
        )}
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
    height: fit-content;

    background: rgba(245, 245, 245, 1);

    box-shadow: -5px -5px 4px rgba(0, 0, 0, 0.25);
  }

  button {
    margin-top: 10px;
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

    margin-top: 40px;
    margin-bottom: 30px;
  }
`;

const AlertIcon = styled.div`
  && {
    position: absolute;

    top: -35px;
    background: rgba(245, 245, 245, 1);
    border-radius: 50%;

    width: fit-content;
    height: fit-content;
  }
  ion-icon {
    color: ${({ color }) => (color ? color : "var(--azul-destaque)")};
    font-size: 70px;
  }
`;

const ColoredButton = styled.div`
  button {
    background: ${({ color }) => color};
    color: ${({ fontColor }) => fontColor};
  }
`;
