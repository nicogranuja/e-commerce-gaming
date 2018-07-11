import React, { Component, Fragment } from 'react';
import Login from './NavbarElements/Login';
import Register from './NavbarElements/Register';
import SearchBar from './NavbarElements/SearchBar';
import ShoppingCart from './NavbarElements/ShoppingCart';
import Logout from './NavbarElements/Logout';
import UserAccount from './NavbarElements/UserAccount';
import { AppBar, Toolbar, Typography, Snackbar } from '@material-ui/core';

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
  constructor(props) {
    super(props);
    this.state = {
      userIsLoggedIn: false,
      openSuccessMessage: false,
      loginMessage: '',
      encryptionKey: 'myTotalySecretKey' // Maybe replace with a more secure key in the future
    };
  }
  
  handleLoginStatusChange = (isLoggedIn, message) => {
    this.setState({ userIsLoggedIn: isLoggedIn });
    // TODO show logged out message
    this.handleLoginLogoutPopUpMessage(isLoggedIn, message);
  };

  handleLoginLogoutPopUpMessage = (isLoggedIn, message) => {
    if (isLoggedIn) {
      this.setState({ openSuccessMessage: true, loginMessage: message });
      setTimeout(() => {
        this.setState({ openSuccessMessage: false });
      }, 3000);
    }
  };

  render() {
    return (
      <div>
        <AppBar position="static" style={styles.root}>
          <Toolbar>
            <Typography variant="title" color="inherit" style={styles.title}>
              Swagoo - The Worlds Okayest Online Gaming Retailer
            </Typography>
            <SearchBar />
            {!this.state.userIsLoggedIn ? (
              <Fragment>
                <Login styles={styles}
                  onLoginStatusChange={this.handleLoginStatusChange} encryptionKey={this.state.encryptionKey}
                />
                <Register styles={styles}
                  onLoginStatusChange={this.handleLoginStatusChange} encryptionKey={this.state.encryptionKey}
                />
              </Fragment>
            ) : (
              <Fragment>
                <UserAccount styles={styles}/>
                <Logout styles={styles}
                  onLoginStatusChange={this.handleLoginStatusChange}
                />
              </Fragment>
            )}
            <ShoppingCart styles={styles}/>
          </Toolbar>
          <Snackbar
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            open={this.state.openSuccessMessage}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{this.state.loginMessage}</span>}
          />
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
