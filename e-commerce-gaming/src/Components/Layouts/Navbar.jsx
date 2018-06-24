import React, { Component } from 'react';
import { 
  Menu, 
  AccountBox, 
  SupervisorAccount, 
  ShoppingCart 
} from '@material-ui/icons';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1
  },
  title: {
    flex: 1
  },
  hamburguerBtn: {
    marginLeft: -12,
    marginRight: 20
  },
  button: {
    margin: 5,
    color: '#FFF',
    backgroundColor: '#1D8BF1'
  },
  icon: {
    marginLeft: 5
  }
}

class Navbar extends Component {
  render() {
    return <div>
        <AppBar position="static" style={styles.root}>
          <Toolbar>
            {/* TODO: Hide Icon button and put the action buttons inside the hamburger button */}
            <IconButton color="inherit" aria-label="Menu" style={styles.hamburguerBtn}>
              <Menu />
            </IconButton>
            <Typography variant="title" color="inherit" style={styles.title}>
              Games E-Commerce
            </Typography>
            <Button variant="contained" size="small" color="inherit" style={styles.button}>
              Login
              <AccountBox style={styles.icon} />
            </Button>
            <Button variant="contained" size="small" color="inherit" style={styles.button}>
              Register
              <SupervisorAccount style={styles.icon} />
            </Button>
            <Button variant="contained" size="small" color="inherit" style={styles.button}>
              Cart
              <ShoppingCart style={styles.icon} />
            </Button>
          </Toolbar>
        </AppBar>
      </div>;
  }
}

export default Navbar;
