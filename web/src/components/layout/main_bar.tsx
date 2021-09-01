import Navbar from "react-bootstrap/NavBar";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

function MainBar() {
  const Title = styled.span`
    font-size: 2rem;
    letter-spacing: 2px;
    font-weight: bold;

    @media only screen and (max-width: 600px) {
      font-size: 1.5rem;
    }

    @media only screen and (max-width: 350px) {
      font-size: 1.2rem;
    }
  `;

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <Title>Criptography exercises</Title>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default MainBar;
