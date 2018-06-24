import React from 'react';
import {
  Menu,
  AccountBox,
  SupervisorAccount,
  ShoppingCart
} from '@material-ui/icons';
import {
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

class NavbarButtons extends React.Component {
  render() {
    return <div>
        {/* TODO: Hide Menu and dispay with buttons inside when width is min. (For mobile) 
          <IconButton color="inherit" aria-label="Menu" style={styles.hamburguerBtn}>
            <Menu />
          </IconButton>
        */}
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
      </div>;
  }
}

export default NavbarButtons;