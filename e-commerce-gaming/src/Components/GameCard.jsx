import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {Grid} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import {Add, Info} from '@material-ui/icons';
const styles = {
    card: {
      marginTop: '2%',
      marginRight: '1%',
      maxWidth: '20%',
      borderRadius: '3%'
    },
    img: {
      width: '100%',
      height: 'auto'
    },
    media: {
      width: '100%',
      maxWidth:'100%',
    },
    button: {
      backgroundColor: '#1D8BF1',
      color: '#FFF',
      width: 'auto'
    },

  }

class GameCard extends React.Component{
  
  render() {
  const classes = this.props;
  return (
    //<div >
      <Card className={classes.classes.card}>
        <CardMedia className={classes.classes.media}>
          <img src={classes.imgURL} className={classes.classes.img}/>
        </CardMedia>
        <CardContent >
          <Typography gutterBottom variant="headline" component="h2">
            {classes.Title}
          </Typography>
        </CardContent>
        <CardActions >
          <Grid container spacing='12'>
            <Grid item xs='12' sm='6'>
              <Button className={classes.classes.button} >
                MORE
                <Info width='auto'/>
              </Button>
            </Grid>
            <Grid item xs='12' sm='6'>
              <Button className={classes.classes.button} >
                CART
                <Add width='auto'/>
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    //</div>
  );
}
}

GameCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GameCard);