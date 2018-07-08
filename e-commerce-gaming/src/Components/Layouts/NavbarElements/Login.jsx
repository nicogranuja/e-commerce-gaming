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
      open: false
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleLogin = (e) => {
    e.preventDefault();
    let username = document.getElementById('username-login').value;
    let password = document.getElementById('password-login').value;
    // TODO login logic 
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
            <TextField autoFocus margin="dense" id="username-login" label="Username" type="text" required fullWidth/>
            <TextField margin="dense" id="password-login" label="Password" type="password" required fullWidth/>
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