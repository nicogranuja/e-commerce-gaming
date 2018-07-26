import React from 'react';
import store from './../../../Reducers/ItemsReducer'
import { connect } from 'react-redux'
import { 
  Button, 
  Dialog, 
  DialogContent, 
} from '@material-ui/core';
import { ShoppingCart as ShoppinCartIcon } from '@material-ui/icons';
import CartProgress from './ShoppingCartComponents/CartProgress';

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
    const items = this.props.states.addToCartReducer.items;
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
          fullWidth
        >
          <DialogContent>
            {items.length > 0 ?
              <CartProgress itemObjects={items} closeDialog={this.handleClose} />
            : 'Shopping cart is empty. Add items by clicking on the ADD button'
            }
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { states: state };
}

export default connect(mapStateToProps)(ShoppingCart);