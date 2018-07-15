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

class UserSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabValue: 1
    };
  }

  handleTabClick = () => {
    this.props.onTabClick(this.state.tabValue);
  };
  
  render() {
    return (
        <Tab label="Settings" onClick={this.handleTabClick}>
        
        </Tab>
    )
  }
}

export default UserSettings;