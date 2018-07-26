import React from 'react';
import { 
  TextField
} from '@material-ui/core';

class UserPaymentInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John Doe',
      email: 'jdoe@email.com',
      address: '1600 Pennsylvania Ave',
      creditCardNumber: '12345123456789',
      cvv: '555'
    };
  }
  
  render() {
    return (
      <div>
        <TextField
          value={this.state.email}
          autoFocus margin="dense" id="email" label="Email" type="text" required fullWidth
        />
        <TextField
          value={this.state.address}
          margin="dense" id="shipping-address" label="Shipping Address" type="text" required fullWidth
        />
        <TextField
          value={this.state.name}
          margin="dense" id="credit-card" label="Name on Card" type="text" required fullWidth
        />
        <TextField
          value={this.state.creditCardNumber}
          margin="dense" id="credit-card" label="Credit Card Number" type="text" required fullWidth
        />
        <TextField
          id="date"
          label="Expiration Date"
          type="date"
          defaultValue="2017-05-24"
          style={{ width: 200 }}
        />
        <TextField
          value={this.state.cvv}
          margin="dense" id="credit-card" label="CVV" type="password" required fullWidth
          style={{ marginLeft: 20, width: 200 }}
        />
      </div>
    );
  }
}

export default UserPaymentInfo;