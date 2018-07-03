import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { SupervisorAccount } from '@material-ui/icons';

const styles = {
    button: {
        margin: 10,
        color: '#FFF',
        backgroundColor: '#1D8BF1'
    },
    icon: {
        marginLeft: 5
    }
}

export default class Register extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
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
            <TextField autoFocus margin="dense" id="first-name" label="First Name" type="email" required fullWidth/>
            <TextField margin="dense" id="last-name" label="Last Name" type="email" required fullWidth/>
            <TextField margin="dense" id="email-address-register" label="Email Address" type="email" required fullWidth/>
            <TextField margin="dense" id="password" label="Password" type="password" required fullWidth/>
            <TextField margin="dense" id="password-confirm" label="Confirm Password" type="password" required fullWidth/>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary" variant="contained">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}