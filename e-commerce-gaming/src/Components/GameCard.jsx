import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {Grid} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import {Add, Info} from '@material-ui/icons';
import { addItem } from '../Actions/AddItemsToCart';
const styles = {
    card: {
      position: 'relative',
      marginTop: '2%',
      marginRight: '1%',
      width: '20%',
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
      position: 'absolute',
      bottom: 5,
      backgroundColor: '#1D8BF1',
      color: '#FFF',
      width: '40%'
    },

  }

class GameCard extends React.Component{

    handleClick = () => {
        this.props.addItem(this.props.Title);
        console.log("The title is");
        console.log(this.props.Title)
    }

  render() {
  const classes = this.props;
      console.log("The title is ");
      console.log(classes.Title);
  return (
    //<div >
      <Card className={classes.classes.card}>
        <CardMedia className={classes.classes.media}>
          <img src={classes.imgURL} className={classes.classes.img}/>
        </CardMedia>
        <CardContent >
          <Typography gutterBottom align='left' variant="headline" component="h2">
            {classes.Title}
          </Typography>
        </CardContent>
        <CardActions>
          <Grid  container spacing='12'>
            <Grid item xs='12' sm='6'>
              <Button className={classes.classes.button} >
                MORE
                <Info width='auto'/>
              </Button>
            </Grid>
            <Grid item xs='12' sm='6'>
              <Button onClick={(e) => this.handleClick(classes.Title)} className={classes.classes.button} >
                CART
                <Add width='auto'/>
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
  );
}
}

GameCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
    return {
        addItem: (title) => dispatch(addItem(title))


    }
}

export default compose(withStyles(styles),
    connect(null,mapDispatchToProps))(GameCard);