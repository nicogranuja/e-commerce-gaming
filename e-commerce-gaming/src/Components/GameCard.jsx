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
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import classNames from 'classnames';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import IconButton from '@material-ui/core/IconButton';
import GameInfo from './GameInfo'

const variantIcon = {
  success: CheckCircleIcon
}
const styles1 = theme => ({
  success: {
    backgroundColor: green[600],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});
  
const styles = {
  card: {
    position: 'relative',
    width: '17%',
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
    height: 50,
    maxHeight: 150

  },
  Price: {
    marginTop: -20,
    marginBottom: 20

  },
  More: {
    padding: 5,

  },
  Cart: {
    padding: 5,

  },

};
function MySnackbarContent(props) {
  const { classes, className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
}
MySnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};
const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);
const styles2 = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});




class GameCard extends React.Component{
  state = {
    open: false,
   gamesTitlesArray: []
  };

   isNewGameInCart = (title) => {
    for (let i = 0; i < this.props.state.addToCartReducer.items.length; i++) {
      if (this.props.state.addToCartReducer.items[i].title === title) {
        return false;
      }
    }
    return true;
  };
 


  handleClick = () => {
    let itemObj = {
      title: this.props.Title,
      price: this.props.price,
      url: this.props.imgURL
    }
    this.props.addItem(itemObj);

    console.log(this.props.youtubeId)

    if(this.isNewGameInCart(this.props.Title))
      this.setState({ open: true });
  

  }
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  handleClick2 = () => {
    
    console.log(this.props.Description); 
  

  }



  render() {
    const classes = this.props;    
  
    return (
  <React.Fragment>
 <Card className={classes.classes.card}>
        <CardMedia className={classes.classes.media}>
          <img src={classes.imgURL} className={classes.classes.img}/>
        </CardMedia>
        <CardContent >
          <Typography  gutterBottom style={styles.Title} align='center'>
            <h2>{classes.Title}</h2>
          </Typography>
        </CardContent>
        <CardContent >
          <Typography gutterBottom  style={styles.Price} align='center'>
            <h2>{classes.price}</h2>
          </Typography>
        </CardContent>
        <CardActions>
          <Grid  container spacing='12'>
            <Grid item style={styles.More} xs='12' sm='6'>
           {/*  <Button onClick={(e) => this.handleClick2(classes.Title,classes.price)} className={classes.classes.button} >
                MORE
                <Info width='auto'/>
    </Button>*/}
              <GameInfo price={this.props.price} imgURL={this.props.imgURL} Title={this.props.Title} Description={this.props.Description} youtubeId={this.props.youtubeId} classButtonName={classes.classes.button} classImageName = {classes.classes.img}/>
            </Grid>

            <Grid item style={styles.Cart} xs='12' sm='6'>
              <Button onClick={(e) => this.handleClick(classes.Title,classes.price)} className={classes.classes.button} >
                CART
                <Add width='auto'/>
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
      <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={1000}
          onClose={this.handleClose}
        >
          <MySnackbarContentWrapper
            onClose={this.handleClose}
            variant="success"
            message="Game was successfully added to cart!"
          />
        </Snackbar>
      </React.Fragment>
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

const mapStateToProps = (currentPageState) => {

  return {
      state: currentPageState,
  };
};

export default compose(withStyles(styles), connect(mapStateToProps,mapDispatchToProps))(GameCard);