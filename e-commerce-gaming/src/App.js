import React, { Component } from 'react';
import Home from './Components/HomePage';
import MuiThemeProvider from  '@material-ui/core/styles/MuiThemeProvider'
import './App.css';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
          <AppBar position="static" color="default">
              <Toolbar>
                  <Typography variant="title" color="inherit">
                      Games E - Commerce
                  </Typography>
              </Toolbar>
              <Tabs

                  indicatorColor="primary"
                  textColor="primary"
                  fullWidth
              >
                  <Tab label="Xbox One" />
                  <Tab label="PS 4" />
                  <Tab label="Nintendo" />
                  <Tab label="Computer" />
                  <Tab label="Game Boy" />
              </Tabs>
          </AppBar>
      </MuiThemeProvider>
    );
  }
}

export default App;
