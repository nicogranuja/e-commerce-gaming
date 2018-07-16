import React, { Fragment } from 'react';
import { 
  Button, 
  TextField
} from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';

const styles = {
  textWidth: {
    width: 400
  },
  deleteBtn: {
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
      newPasswordConfirmErr: false
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

  handleDeleteBtnAction = () => {
    let conf = window.confirm('Are you sure that you would like to DELETE your account?\n This is an irreversible step');
    if (conf) {
      let key = 'user' + this.props.userObj.username;
      window.localStorage.removeItem(key);
      this.props.handleUserDeleted(); // Logout and show message
    }
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