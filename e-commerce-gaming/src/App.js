import React, { Component } from 'react';
import HomePage from './Components/HomePage';
import ConsoleButtons from './Components/ConsoleButtons';
import MuiThemeProvider from  '@material-ui/core/styles/MuiThemeProvider'
import './App.css';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



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
              <ConsoleButtons/>

          </AppBar>
      </MuiThemeProvider>
    );
  }
}

export default App;
