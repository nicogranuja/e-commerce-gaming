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

class Register extends React.Component {
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

  handleRegister = (e) => {
    e.preventDefault();
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let password = document.getElementById('password-register').value;
    let passwordConfirm = document.getElementById('password-confirm').value;
    // TODO register logic 
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
          <DialogTitle id="form-dialog-title">Register for E-Commerce</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out all the fields of the form to complete the registration
            </DialogContentText>
            <TextField autoFocus margin="dense" id="first-name" label="First Name" type="text" required fullWidth/>
            <TextField margin="dense" id="last-name" label="Last Name" type="text" required fullWidth/>
            <TextField margin="dense" id="username-register" label="Username" type="text" required fullWidth/>
            <TextField margin="dense" id="password-register" label="Password" type="password" required fullWidth/>
            <TextField margin="dense" id="password-confirm" label="Confirm Password" type="password" required fullWidth/>
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