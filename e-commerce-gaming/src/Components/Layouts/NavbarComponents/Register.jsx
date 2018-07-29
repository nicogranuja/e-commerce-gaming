import React from 'react';
import { 
  Button, 
  TextField, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle,
  InputLabel,
  Select,
  Input,
  MenuItem,
  Checkbox,
  ListItemText
} from '@material-ui/core';
import { SupervisorAccount } from '@material-ui/icons';
import Cryptr from 'cryptr';

const consoleGamesPreferences = [ 'Xbox One', 'PS4', 'PC', 'Nintendo', 'Hand Held' ];

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      name: '',
      address: '',
      addressErr: '',
      nameErr: false,
      username: '',
      usernameErr: false,
      password: '',
      passwordErr: false,
      passwordConfirm: '',
      passwordConfirmErr: false,
      passwordHelperText: '',
      usernameHelperText: '',
      gamePreferences: []
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

  handleAddressChange = (e) => {
    this.setState({ address: e.target.value });
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

  handleGamesPreferencesChange = (e) => {
    this.setState({ gamePreferences: e.target.value });
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
    let valuesToCheck = ['name','address', 'username', 'password', 'passwordConfirm'];
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
    let user = { name: this.state.name, address: this.state.address, username: this.state.username, password: hashedPassword, gamePreferences: this.state.gamePreferences };
    let key = 'user' + this.state.username;
    window.localStorage.setItem(key, JSON.stringify(user));
    this.props.updateUserObject(user);
  };

  updateUIForLoggedUser = () => {
    let message = `Registration successful! Welcome ${this.state.name}`;
    this.setState({ open: false });
    this.props.onLoginStatusChange(true, message);
  };

  handleKeyPress = (e) => {
    // Enter key pressed
    if (e.charCode == 13) {
      this.handleRegister(e);
    }
  };

  render() {
    let styles = this.props.styles;
    return (
      <div onKeyPress={this.handleKeyPress}>
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
              autoFocus margin="dense" id="full-name" label="Full Name" type="text" required fullWidth
            />
            <TextField value={this.state.address} onChange={this.handleAddressChange} error={this.state.addressErr} 
              autoFocus margin="dense" id="full-address" label="Address" type="text" required fullWidth
            />
            <TextField value={this.state.username} onChange={this.handleUsernameChange} 
              error={this.state.usernameErr} helperText={this.state.usernameHelperText}
              margin="dense" id="username-register" label="Username" type="text" required fullWidth
            />
            <TextField value={this.state.password} onChange={this.handlePasswordChange} error={this.state.passwordErr}
              margin="dense" id="password-register" label="Password" type="password" required fullWidth
            />
            <TextField style={{marginBottom: 20}} value={this.state.passwordConfirm} onChange={this.handlePasswordConfirmChange} 
              error={this.state.passwordConfirmErr} helperText={this.state.passwordHelperText}
              margin="dense" id="password-confirm" label="Confirm Password" type="password" required fullWidth
            />
            <InputLabel htmlFor="select-multiple-checkbox">Game Preferences</InputLabel>
            <Select
              multiple
              value={this.state.gamePreferences}
              onChange={this.handleGamesPreferencesChange}
              input={<Input id="select-multiple-checkbox" />}
              renderValue={selected => selected.join(', ')}
              fullWidth
            >
              {consoleGamesPreferences.map(name => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={this.state.gamePreferences.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
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