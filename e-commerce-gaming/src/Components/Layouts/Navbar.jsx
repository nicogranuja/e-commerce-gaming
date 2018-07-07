import React, { Component } from 'react';
import Login from './NavbarElements/Login';
import Register from './NavbarElements/Register';
import SearchBar from './NavbarElements/SearchBar';
import ShoppingCart from './NavbarElements/ShoppingCart';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1
  },
  title: {
    flex: 1
  },
  button: {
    margin: 10,
    color: '#FFF',
    backgroundColor: '#1D8BF1'
  },
  icon: {
    marginLeft: 5
  }
}

class Navbar extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" style={styles.root}>
          <Toolbar>
            <Typography variant="title" color="inherit" style={styles.title}>
              Swagoo - The Worlds Okayest Online Gaming Retailer
            </Typography>
            <SearchBar />
            <Login styles={styles}/>
            <Register styles={styles}/>
            <ShoppingCart styles={styles}/>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
