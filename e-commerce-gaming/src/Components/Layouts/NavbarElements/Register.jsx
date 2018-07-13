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
import { SupervisorAccount } from '@material-ui/icons';
import Cryptr from 'cryptr';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      name: '',
      nameErr: false,
      username: '',
      usernameErr: false,
      password: '',
      passwordErr: false,
      passwordConfirm: '',
      passwordConfirmErr: false,
      passwordHelperText: '',
      usernameHelperText: '',
    };
  }

  handleClickOpen = () => {
    this.resetErrors();
    this.clearPasswordFields();
    this.setState({ open: true });
  };

  resetErrors = () => {
    let errorsArr = ['nameErr', 'usernameErr', 'passwordErr', 'passwordConfirmErr'];
    for (let i = 0; i < errorsArr.length; i++) {
      let prop = errorsArr[i];
      this.setState({ [prop]: false });
    }
    this.setState({ passwordHelperText: '' });
    this.setState({ usernameHelperText: '' });
  };

  clearPasswordFields = () => {
    this.setState({ password: '' });
    this.setState({ passwordConfirm: '' });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleFullNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handlePasswordConfirmChange = (e) => {
    this.setState({ passwordConfirm: e.target.value });
  };

  handleRegister = (e) => {
    e.preventDefault();

    // Validation
    if (this.thereAreEmptyValuesInForm()) {
      return;
    } else if (this.passwordsAreInvalid()) {
      return;
    } else if (this.usernameAlreadyExists(this.state.username)) {
      return;
    }

    this.handleSavingUser();
    this.updateUIForLoggedUser();
  };

  thereAreEmptyValuesInForm = () => {
    let hasEmptyValues = false;
    let valuesToCheck = ['name', 'username', 'password', 'passwordConfirm'];
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

  passwordsAreInvalid = () => {
    let isInvalid = false;
    if (this.state.password !== this.state.passwordConfirm) {
      this.setState({ passwordHelperText: 'Passwords do not match' });
      this.setState({ passwordConfirmErr: true });
      isInvalid = true;
    } else if (this.state.password.length < 8) {
      this.setState({ passwordHelperText: 'Please use a password that contains more than 8 characters' });
      this.setState({ passwordConfirmErr: true });
      this.setState({ passwordErr: true });
      isInvalid = true;
    }
    return isInvalid;
  };

  usernameAlreadyExists = (username) => {
    let key = 'user' + username;
    let exists = false;
    if (window.localStorage.getItem(key) != null) {
      this.setState({ usernameHelperText: 'Username already exists.' });
      this.setState({ usernameErr: true });
      exists = true;
    }
    return exists;
  };

  encryptPassword = (password) => {
    const cryptr = new Cryptr(this.props.encryptionKey);
    let passEncrypted = cryptr.encrypt(password);
    return passEncrypted;
  };

  handleSavingUser = () => {
    // Password encryption
    let hashedPassword = this.encryptPassword(this.state.password);

    // Save user with 'unique' key being user + username
    let user = { name: this.state.name, username: this.state.username, password: hashedPassword };
    let key = 'user' + this.state.username;
    window.localStorage.setItem(key, JSON.stringify(user));
  };

  updateUIForLoggedUser = () => {
    let message = `Registration successful! Welcome ${this.state.name}`;
    this.setState({ open: false });
    this.props.onLoginStatusChange(true, message);
  };

  render() {
    let styles = this.props.styles;
    return (
      <div>
        <Button onClick={this.handleClickOpen} variant="contained" size="small" color="inherit" style={styles.button}>
          Register
          <SupervisorAccount style={styles.icon} />
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Register for Swagoo</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out all the fields of the form to complete the registration
            </DialogContentText>
            <TextField value={this.state.name} onChange={this.handleFullNameChange} error={this.state.nameErr} 
              autoFocus margin="dense" id="full-name" label="Full Name" type="text" required fullWidth/>
            <TextField value={this.state.username} onChange={this.handleUsernameChange} 
              error={this.state.usernameErr} helperText={this.state.usernameHelperText}
              margin="dense" id="username-register" label="Username" type="text" required fullWidth/>
            <TextField value={this.state.password} onChange={this.handlePasswordChange} error={this.state.passwordErr}
              margin="dense" id="password-register" label="Password" type="password" required fullWidth/>
            <TextField value={this.state.passwordConfirm} onChange={this.handlePasswordConfirmChange} 
              error={this.state.passwordConfirmErr} helperText={this.state.passwordHelperText}
              margin="dense" id="password-confirm" label="Confirm Password" type="password" required fullWidth/>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleRegister} color="primary" variant="contained">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Register;