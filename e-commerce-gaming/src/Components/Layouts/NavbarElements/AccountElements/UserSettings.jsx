import React, { Fragment } from 'react';
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

class UserSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabValue: 0,
      name: 'Should name be here',
      nameErr: false
    };
  }
  
  render() {
    return (
      <Fragment>
        Settings
      </Fragment>
    )
  }
}

export default UserSettings;