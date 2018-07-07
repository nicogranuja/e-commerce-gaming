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
import { ShoppingCart as ShoppinCartIcon } from '@material-ui/icons';

class ShoppingCart extends React.Component {
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
    let styles = this.props.styles;
    return (
      <div>
        <Button onClick={this.handleClickOpen} variant="contained" size="small" color="inherit" style={styles.button}>
            Cart
            <ShoppinCartIcon style={styles.icon} />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Shopping Cart</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Shopping Cart Items List
            </DialogContentText>
            <TextField autoFocus margin="dense" id="test" label="Placeholder" type="text" fullWidth/>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
            <Button onClick={this.handleClose} color="primary" variant="contained">
              Checkout
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ShoppingCart;