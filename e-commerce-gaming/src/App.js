import React, { Component, Fragment } from 'react';
import ConsoleButtons from './Components/ConsoleButtons';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Games from './Games'
import { games } from './Store'; 
import './App.css';
import Navbar from './Components/Layouts/Navbar';

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
            <Navbar />
            <ConsoleButtons/>
        </MuiThemeProvider>
        <Games games={games}/>
      </Fragment>     
    );
  }
}

export default App;
