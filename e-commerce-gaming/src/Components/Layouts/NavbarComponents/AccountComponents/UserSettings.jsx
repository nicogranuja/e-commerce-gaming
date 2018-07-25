import React, { Fragment } from 'react';
import { 
  Button, 
  TextField,
  Select,
  MenuItem
} from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';

const styles = {
  textWidth: {
    width: 400
  },
  deleteBtn: {
    fontSize: 12,
    height: 10,
    width: 170, 
    marginTop: 15,
    marginBottom: 15
  }
};

class UserSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabValue: 0,
      name: '',
      nameErr: false,
      password: '',
      passwordErr: false,
      newPassword: '',
      newPasswordErr: false,
      newPasswordConfirm: '',
      newPasswordConfirmErr: false,
      address: '1600 Pennsylvania Ave',
      stateSelected: 'NW'
    };
  }

  componentWillMount = () => {
    this.setState({name: this.props.userObj.name });
  };

  handleFullNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleNewPasswordChange = (e) => {
    this.setState({ newPassword: e.target.value });
  };
  
  handleNewPasswordConfirmationChange = (e) => {
    this.setState({ newPasswordConfirm: e.target.value });
  };

  handleAddressChange = (e) => {
    this.setState({ address: e.target.value });
  };

  handleDeleteBtnAction = () => {
    let conf = window.confirm('Are you sure that you would like to DELETE your account?\n This is an irreversible step');
    if (conf) {
      let key = 'user' + this.props.userObj.username;
      window.localStorage.removeItem(key);
      this.props.handleUserDeleted(); // Logout and show message
    }
  };

  handleChangeSelectedState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Fragment>
        <TextField value={this.state.name} onChange={this.handleFullNameChange} error={this.state.nameErr} 
          autoFocus margin="dense" id="full-name" label="Full Name" type="text" required
          style={styles.textWidth}
        />
        <TextField value={this.state.password} onChange={this.handlePasswordChange} error={this.state.passwordErr}
          margin="dense" id="password-register" label="Password" type="password" required
          style={styles.textWidth}
        />
        <TextField value={this.state.newPassword} onChange={this.handleNewPasswordChange} error={this.state.newPasswordErr}
          margin="dense" id="new-password-register" label="New Password" type="password"
          style={styles.textWidth}
        />
        <TextField value={this.state.newPasswordConfirm} onChange={this.handleNewPasswordConfirmationChange} error={this.state.newPasswordConfirmErr}
          margin="dense" id="new-password-confirm-register" label="New Password Confirmation" type="password"
          style={styles.textWidth}
        />
        <TextField value={this.state.address} onChange={this.handleAddressChange}
          margin="dense" id="new-address-register" label="Shipping Address" type="text"
          style={styles.textWidth}
        />
        <Select
          style={{ marginLeft: 10 }}
          value={this.state.stateSelected}
          inputProps={{
            name: 'stateSelected'
          }}
          onChange={this.handleChangeSelectedState}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'TX'}>TX</MenuItem>
          <MenuItem value={'NW'}>NW</MenuItem>
        </Select>
        <Button
          onClick={this.handleDeleteBtnAction}
          variant="contained" color="secondary" style={ styles.deleteBtn }
        >
          Delete Account
        <DeleteIcon />
      </Button>
      </Fragment>
    )
  }
}

export default UserSettings;