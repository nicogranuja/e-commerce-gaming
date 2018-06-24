import React, { Component, Fragment } from 'react';
import ConsoleButtons from './Components/ConsoleButtons';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Games from './Games'
import { games } from './Store'; 
import './App.css';

class App extends Component {
  state = {
    games
  };
  

  getGamesbyConsoleCategory() {
    return Object.entries(
      this.state.games.reduce((games, game) => {
        const {console} = game

        games[console] = games[console]
          ? [...games[console], game]
          : [game]

        return games
      }, {})
    )
  }
        
  render() {
    const games = this.getGamesbyConsoleCategory();
    const muiTheme = createMuiTheme();

    return (
      <Fragment>
        <MuiThemeProvider theme={muiTheme}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                      Games E - Commerce
                    </Typography>
                </Toolbar>
                <ConsoleButtons/>
            </AppBar>
        </MuiThemeProvider>
        <Games games={games}/>
      </Fragment>     
    );
  }
}

export default App;
