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
    width: '32%',
    margin: '5px'
  },
  img: {
    width: '100%',
    height: '325px'
  },
  media: {
    width: '100%',
    maxWidth:'100%',
  },
  button: {
    position: 'absolute',
    bottom: '5px',
    backgroundColor: '#1D8BF1',
    color: '#FFF',
    width: '40%'
  },
  Title: {
    padding: 5,

  },
  Price: {
    padding: 5,

  }
};



class GameCard extends React.Component{

  handleClick = () => {
    let itemObj = {
      title: this.props.Title,
      price: this.props.price,
      url: this.props.imgURL
    }
    this.props.addItem(itemObj);
  }

  render() {
    const classes = this.props;    
  
    return (
      <Card className={classes.classes.card}>
        <CardMedia className={classes.classes.media}>
          <img src={classes.imgURL} className={classes.classes.img}/>
        </CardMedia>
        <CardContent >
          <Typography  gutterBottom style={styles.Title} align='center' variant="title" >
            {classes.Title}
          </Typography>
          <Typography gutterBottom  style={styles.Price} align='center' variant="title" >
            {classes.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Grid  container spacing='12'>
            <Grid item style={{paddingRight: '1%'}} xs='12' sm='6'>
              <Button className={classes.classes.button} >
                MORE
                <Info width='auto'/>
              </Button>
            </Grid>

            <Grid item style={{paddingLeft: '1%'}} xs='12' sm='6'>
              <Button onClick={(e) => this.handleClick(classes.Title,classes.price)} className={classes.classes.button} >

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
      addItem: (item) => dispatch(addItem(item))
    }
}

export default compose(withStyles(styles), connect(null,mapDispatchToProps))(GameCard);