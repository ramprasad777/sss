import React from 'react';
import { Container, AppBar, Toolbar,
    Typography
  } from '@material-ui/core';
export default function Footer() {
    return (
        <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit" align="center">
                © 2021 SSS
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}