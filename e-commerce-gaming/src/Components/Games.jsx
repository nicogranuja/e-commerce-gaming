import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper} from '@material-ui/core';
import SelectedGamesComponent from './SelectedGamesComponent'
import GenreButtons from './GenreButtons'

const stylesRightPane = {
  Paper: {
      width:200,
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: 'auto',
      marginLeft:25
  }
};

const stylesLeftPane = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 500,
        overflowY: 'auto',
        width:900,
        marginRight: 25
    }
};

class Games extends React.Component {



  render() {

    return (
      <Grid container>
        <Grid item sm>
          <Paper style={stylesRightPane.Paper}>
            <GenreButtons/>
          </Paper>
        </Grid>
        <Grid item sm>
          <Paper style={stylesLeftPane.Paper}>
              <SelectedGamesComponent/>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Games;