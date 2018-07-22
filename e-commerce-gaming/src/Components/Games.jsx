import React from 'react';
import { Paper, Grid  } from '@material-ui/core';
import SelectedGamesComponent from './SelectedGamesComponent'
import GenreButtons from './GenreButtons'

const stylesRightPane = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    width: '20vw',
    overflowY: 'auto',
    marginLeft:25
  }
};

const stylesLeftPane = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 'auto',
        width: '65vw',
        overflowY: 'auto',
        marginRight: 25
    }
};

class Games extends React.Component {



  render() {

    return (
      <Grid container spacing={24}>
        <Grid item >
          <Paper style={stylesRightPane.Paper} >
            <GenreButtons/>
          </Paper>
        </Grid>
        <div width='5vw'/>
        <Grid item>
          <Paper style={stylesLeftPane.Paper}>
              <SelectedGamesComponent/>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Games;