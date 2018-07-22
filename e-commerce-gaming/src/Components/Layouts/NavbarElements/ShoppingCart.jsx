import React from 'react';
import store from './../../../Reducers/ItemsReducer'
import { connect } from 'react-redux'
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

  render() {
    console.log("Inside the shoppping cart")
    console.log(this.props.states.addToCartReducer)
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

            <div>
              {this.props.states.addToCartReducer}
            </div>
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

function mapStateToProps(state) {
  return { states: state };
}

export default connect(mapStateToProps)(ShoppingCart);