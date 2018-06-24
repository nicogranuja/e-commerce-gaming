import React, { Component } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Icon
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
    margin: 5
  }
}

class Navbar extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" style={styles.root}>
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu" style={styles.hamburguerBtn}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" style={styles.title}>
              Games E - Commerce
            </Typography>
            <Button variant="contained" size="small" color="inherit" style={styles.button}>Login</Button>
            <Button variant="contained" size="small" color="inherit" style={styles.button}>Register</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Navbar;
