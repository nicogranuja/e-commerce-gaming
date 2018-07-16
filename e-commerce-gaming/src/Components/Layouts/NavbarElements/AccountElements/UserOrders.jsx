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
      tabValue: 1
    };
  }

  handleTabClick = () => {
    this.props.onTabClick(this.state.tabValue);
  };
  
  render() {
    return (
      <Fragment>
        <div style={{ height: 300 }}></div>
      </Fragment>
    )
  }
}

export default UserSettings;