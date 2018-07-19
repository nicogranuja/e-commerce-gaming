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
  },
  snackbarText: {
    textAlign: 'center'
  }
}


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { name: 'John Doe' },
      userIsLoggedIn: false,
      openSnackbarMessage: false,
      loginMessage: '',
      encryptionKey: 'myTotalySecretKey' // Maybe replace with a more secure key in the future
    };
  }

  handleSnackbarClose = () => {
    this.setState({ openSnackbarMessage: false });
  };
  
  handleLoginStatusChange = (isLoggedIn, message) => {
    this.setState({ userIsLoggedIn: isLoggedIn });
    this.handleLoginLogoutPopUpMessage(message);
  };

  handleLoginLogoutPopUpMessage = (message) => {
    this.setState({ openSnackbarMessage: true, loginMessage: message });
  };

  handleUpdateCurrentUserObj = (userObj) => {
    this.setState({ user: userObj });
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
            <ShoppingCart styles={styles}/>
            {!this.state.userIsLoggedIn ? (
              <Fragment>
                <Login styles={styles}
                  onLoginStatusChange={this.handleLoginStatusChange} encryptionKey={this.state.encryptionKey}
                  updateUserObject={this.handleUpdateCurrentUserObj}
                />
                <Register styles={styles}
                  onLoginStatusChange={this.handleLoginStatusChange} encryptionKey={this.state.encryptionKey}
                  updateUserObject={this.handleUpdateCurrentUserObj}
                />
              </Fragment>
            ) : (
              <Fragment>
                <UserAccount styles={styles} userObj={this.state.user} 
                  onLoginStatusChange={this.handleLoginStatusChange}
                />
                <Logout styles={styles}
                  onLoginStatusChange={this.handleLoginStatusChange}
                />
              </Fragment>
            )}
          </Toolbar>
          <Snackbar
            open={this.state.openSnackbarMessage}
            styles={styles.snackbarText}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            autoHideDuration={5000}
            onClose={this.handleSnackbarClose}
            message={<span id="message-id">{this.state.loginMessage}</span>}
          />
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
