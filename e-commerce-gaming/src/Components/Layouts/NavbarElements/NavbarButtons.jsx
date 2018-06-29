import React from 'react';
import {
  AccountBox,
  SupervisorAccount,
  ShoppingCart
} from '@material-ui/icons';
import { Button } from '@material-ui/core';

const styles = {
  button: {
    margin: 10,
    color: '#FFF',
    backgroundColor: '#1D8BF1'
  },
  icon: {
    marginLeft: 5
  }
}

class NavbarButtons extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default NavbarButtons;