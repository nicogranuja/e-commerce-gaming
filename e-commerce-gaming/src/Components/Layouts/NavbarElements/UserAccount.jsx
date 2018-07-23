import React from 'react';
import { 
  Button,
  Dialog,
  DialogActions,
  DialogContent, 
  Tabs,
  Tab
} from '@material-ui/core';
import { AccountBox } from '@material-ui/icons';
import UserSettings from './AccountElements/UserSettings';
import UserOrders from './AccountElements/UserOrders';

const styles = {
  tabStyle: {
    marginBottom: 15
  }
}

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

  handleUserDeleted = () => {
    let message = `Sorry to see you go :(`;
    this.props.onLoginStatusChange(false, message);
  }
  
  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen} variant="contained" size="small" color="inherit" style={this.props.styles.button}>
          Account
          <AccountBox style={this.props.styles.icon}/>
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth
        >
          <Tabs
            value={this.state.selectedTab} onChange={this.handleChange}
            indicatorColor="primary" textColor="primary"
            fullWidth centered
            style={styles.tabStyle}
          >
            <Tab label="Settings"/>
            <Tab label="Orders"/>
          </Tabs>
            <DialogContent>
              { (this.state.selectedTab === 0) 
                ? <UserSettings userObj={this.props.userObj} handleUserDeleted={this.handleUserDeleted}/>
                : <UserOrders userObj={this.props.userObj} />
              }
            </DialogContent>
          {this.state.selectedTab === 0 && 
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Close
              </Button>
              <Button onClick={this.handleClose} color="primary" variant="contained">
                Update
              </Button>
            </DialogActions>
          }
        </Dialog>
      </div>
    )
  }
}

export default UserAccount;