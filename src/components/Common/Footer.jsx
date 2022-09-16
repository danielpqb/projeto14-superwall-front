import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Icon from "./Icon";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <Container>
      <Icon
        onClick={() => {
          navigate("/");
        }}
        name={"home"}
      />
      <Icon
        onClick={() => {
          navigate("/");
        }}
        name={"notifications"}
        size={25}
      />
      <Icon
        onClick={() => {
          navigate("/");
        }}
        name={"receipt"}
        size={25}
      />
      <Icon
        onClick={() => {
          navigate("/cart");
        }}
        name={"cart"}
        size={34}
        badge={true}
      />
    </Container>
  );
}

const Container = styled.div`
  & {
    justify-content: space-between;

    height: 60px;
    padding: 10px 15px;

    background: var(--azul-base);

    width: 100vw;

    position: fixed;
    bottom: 0;
    left: 0;

    z-index: 10;

    box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
  }
`;
