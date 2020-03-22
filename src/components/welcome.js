import React from "react";
import { Box, Button } from "@material-ui/core";
import logo from "../assets/dgE_v4.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <Container>
      <h1>Willkommen</h1>
      <p>dgE (sprich: diggi) - App für Geschäfte</p>
      <Logo src={logo} alt="dgE Logo" />
      <p>
        <Button component={Link} to="/register">
          Jetzt registrieren
        </Button>
      </p>
    </Container>
  );
};

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 400px;
  max-width: 100%;
`;

export default Welcome;
