import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../Context/UserContext";

export default function Header({ children }) {
  const { setUserData } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <Container>
      <h1>{children}</h1>
      <Icon
        onClick={() => {
          setUserData({ token: null });
          navigate("/");
        }}
      >
        <ion-icon name="exit-outline"></ion-icon>
      </Icon>
    </Container>
  );
}

const Container = styled.div`
  & {
    height: 70px;
    justify-content: space-between;
  }

  h1 {
    min-width: fit-content;
    font-weight: 700;
    font-size: 26px;

    padding: 20px 0px;
  }
`;

const Icon = styled.div`
  & {
    justify-content: flex-end;
  }

  ion-icon {
    font-size: 30px;
  }
`;
