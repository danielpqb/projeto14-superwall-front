import styled from "styled-components";
import logoBlue from "../../assets/img/logo-blue.svg";

export default function SessionHeader({title}) {
    return (
        <Container>
            <img src={logoBlue} alt="" />
            <h3>{title}</h3>
        </Container>
    )
}

const Container = styled.div`
  height: 40px;
  width: calc(100% - 40px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: var(--azul-base) 3px solid;
  border-radius: 0 0 3px 3px;
  margin: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  img {
    width: 55px;
  }

  h3{
    color: var(--azul-base);
    font-weight:900;
    font-size: 24px;
  }
`