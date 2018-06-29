import React, { Fragment } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import { Paper, Typography } from '@material-ui/core';
import { games } from '../TempListOfGames';
import SelectedGamesComponent from './SelectedGamesComponent'
import GenreButtons from './GenreButtons'

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: 'auto'
  }
};

class Games extends React.Component {



  render() {

    return (
      <Grid container>
        <Grid item sm>
          <Paper style={styles.Paper}>
            <GenreButtons/>
          </Paper>
        </Grid>
        <Grid item sm>
          <Paper style={styles.Paper}>
              <SelectedGamesComponent/>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Games;