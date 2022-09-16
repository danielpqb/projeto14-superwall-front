import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../Context/UserContext";

export default function Icon({ onClick, name, size, badge }) {
  const { cart } = useContext(UserContext);

  return (
    <Container onClick={onClick} size={size}>
      <ion-icon name={name}></ion-icon>
      {badge && cart.length ? <Badge>{cart.length}</Badge> : ""}
    </Container>
  );
}

const Container = styled.div`
  & {
    position: relative;

    cursor: pointer;
    width: fit-content;

    margin: 0px 10px;
  }

  ion-icon {
    font-size: ${({ size }) => (size ? size + "px" : "30px")};
  }
`;

const Badge = styled.div`
  & {
    background: red;

    position: absolute;

    width: 16px;
    height: 16px;

    border-radius: 50%;

    top: 0;
    right: -5px;
  }
`;
