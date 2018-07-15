import React from 'react';
import { 
  Button, 
  TextField, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle,
  Tabs,
  Tab
} from '@material-ui/core';
import { AccountBox } from '@material-ui/icons';
import UserSettings from './AccountElements/UserSettings';
import UserOrders from './AccountElements/UserOrders';

class UserAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedTab: 0
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (event, selectedTab) => {
    this.setState({ selectedTab });
  };
  
  render() {
    let styles = this.props.styles;
    return (
      <div>
        <Button onClick={this.handleClickOpen} variant="contained" size="small" color="inherit" style={styles.button}>
          Account
          <AccountBox style={styles.icon} />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <Tabs
            value={this.state.selectedTab} onChange={this.handleChange}
            indicatorColor="primary" textColor="primary"
            fullWidth centered
          >
            <Tab label="My Settings"/>
            <Tab label="My Orders"/>
          </Tabs>
            <DialogContent>
              { (this.state.selectedTab == 0) ? <UserSettings />
                : <UserOrders />
              }
            </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default UserAccount;