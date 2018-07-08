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

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      username: '',
      password: ''
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
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
    console.log('username', this.state.username, 'password', this.state.password);
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
            <TextField value={this.state.username} onChange={this.handleUsernameChange} 
              autoFocus margin="dense" id="username-login" label="Username" type="text" required fullWidth
            />
            <TextField value={this.state.password} onChange={this.handlePasswordChange} 
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