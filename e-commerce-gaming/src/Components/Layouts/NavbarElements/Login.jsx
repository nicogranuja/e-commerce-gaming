import React from 'react';
import { 
  Button, 
  TextField, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle
} from '@material-ui/core';
import { AccountBox } from '@material-ui/icons';
import Cryptr from 'cryptr';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      username: '',
      usernameErr: false,
      usernameHelperText: '',
      password: '',
      passwordErr: false,
      passwordHelperText: ''
    };
  }

  handleClickOpen = () => {
    this.resetErrors();
    this.setState({ password: '' });
    this.setState({ open: true });
  };

  resetErrors = () => {
    let errorsArr = ['usernameErr', 'passwordErr'];
    for (let i = 0; i < errorsArr.length; i++) {
      let prop = errorsArr[i];
      this.setState({ [prop]: false });
    }
    this.setState({ passwordHelperText: '' });
    this.setState({ usernameHelperText: '' });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value })
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value })
  };

  handleLogin = (e) => {
    e.preventDefault();
    let usernameKey = 'user' + this.state.username;
    let user = window.localStorage.getItem(usernameKey);
    let userObj = JSON.parse(user);
    if (this.thereAreEmptyValuesInForm()) {
      return;
    } else if (this.usernameNotFoundOrWrongPasswordsDontMatch(userObj)) {
      return;
    }
    
    // User login successful
    this.updateUIForLoggedUser(userObj.name);
  };

  thereAreEmptyValuesInForm = () => {
    let hasEmptyValues = false;
    let valuesToCheck = ['username', 'password'];
    for (let i = 0; i < valuesToCheck.length; i++) {
      let propValue = valuesToCheck[i];
      let errorName = propValue + 'Err';
      this.setState({ [errorName]: false });
      if (this.state[propValue] === '') {
        this.setState({ [errorName]: true });
        hasEmptyValues = true;
      }
    }
    return hasEmptyValues;
  };

  usernameNotFoundOrWrongPasswordsDontMatch = (user) => {
    if (user === null) {
      this.setState({ usernameHelperText: 'Username not found.', usernameErr: true });
      return true;
    } 
    const cryptr = new Cryptr(this.props.encryptionKey);
    let storedPassword = cryptr.decrypt(user.password);
    if (storedPassword !== this.state.password) {
      this.setState({ passwordHelperText: 'Username not found or passwords do not match our records. Please try again.', 
        usernameErr: false, 
        passwordErr: true 
      });
      return true;
    }
    return false;
  };

  updateUIForLoggedUser = (name) => {
    let message = `Welcome back ${name}!`;
    this.setState({ open: false });
    this.props.onLoginStatusChange(true, message);
  };
  
  render() {
    let styles = this.props.styles;
    return (
      <div>
        <Button onClick={this.handleClickOpen} variant="contained" size="small" color="inherit" style={styles.button}>
          Login
          <AccountBox style={styles.icon} />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Login to Your Account</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter your username followed by the password.
            </DialogContentText>
            <TextField value={this.state.username} onChange={this.handleUsernameChange} error={this.state.usernameErr}
              helperText={this.state.usernameHelperText}
              autoFocus margin="dense" id="username-login" label="Username" type="text" required fullWidth
            />
            <TextField value={this.state.password} onChange={this.handlePasswordChange} error={this.state.passwordErr}
              helperText={this.state.passwordHelperText}
              margin="dense" id="password-login" label="Password" type="password" required fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleLogin} color="primary" variant="contained">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Login;