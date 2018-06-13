import React, { Component, Fragment } from 'react';
import ConsoleButtons from './Components/ConsoleButtons';
import MuiThemeProvider from  '@material-ui/core/styles/MuiThemeProvider'
import './App.css';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Games from './Components/Games.jsx'
import {games} from './ListOfGames'; 

class App extends Component {
    
      state ={
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
    return (
        <Fragment>
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
      <Games games={games}/>
      </Fragment>     
    );
  }
}

export default App;
