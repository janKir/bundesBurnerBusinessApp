import React from "react";
import logo from "../assets/dgE_v4.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PageContainer from "./page-container";
import ActionButton from "./action-button";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Icon
} from "@material-ui/core";

const Receive = () => {
  return (
    <PageContainer>
      <AppBar>
        <Toolbar>
          <FillSpace />

          <Typography variant="h6">Empfangen</Typography>

          <FillSpace />
        </Toolbar>
      </AppBar>
      <h1>Willkommen</h1>
      <Logo src={logo} alt="dgE Logo" />
      <p>
        <ActionButton component={Link} to="/receive">
          Zahlung empfangen
        </ActionButton>
      </p>
      <p>
        <ActionButton component={Link} to="/payback" color="secondary">
          Rückzahlung
        </ActionButton>
      </p>
    </PageContainer>
  );
};

const FillSpace = styled.div`
  flex-grow: 1;
`;

const Logo = styled.img`
  width: 300px;
  max-width: 100%;
`;

export default Receive;
