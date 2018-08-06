import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

class PaymentReviewInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John Doe',
      email: 'jdoe@email.com',
      address: '1600 Pennsylvania Ave',
      total : 100
    };
  }

  calculateTotalAmount = () => {
    let total = 0;
    let items = this.props.itemObjects;
    items.map((item, index) => {
      total += parseFloat(item.price.slice(1, item.price.length)) * this.props.selectedNumberOfItemsPerGame[index];
    })
    this.setState({ total: total });
  }

  componentWillMount = () => {
    this.calculateTotalAmount();
  };
  
  render() {
    const itemObjects = this.props.itemObjects;
    const selectedNumberOfItemsPerGame = this.props.selectedNumberOfItemsPerGame;

    return (
      <Paper elevation={2}>
        <Typography style={{marginLeft: 15}} variant="body2" gutterBottom>
          <span style={{ fontWeight: 'bold', marginRight: 98 }}>Email: </span> {this.state.email}
        </Typography>
        <Typography style={{marginLeft: 15 }} variant="body2" gutterBottom>
          <span style={{ fontWeight: 'bold', marginRight: 15 }}>Shipping Address:</span> {this.state.address}
        </Typography>
        <Typography style={{marginLeft: 15 }} variant="body2" gutterBottom>
          <span style={{ fontWeight: 'bold', marginRight: 24 }}>Payment Method:</span> Credit Card (Visa)
        </Typography>
        <Typography style={{marginLeft: 15 }} variant="body2" gutterBottom>
          <span style={{ fontWeight: 'bold' }}>Orders:</span>
        </Typography>
        <List>
          {itemObjects.map((item, i) => {
            return(
              <ListItem key={i}>
                <Avatar>
                  <ImageIcon />
                </Avatar>
                <ListItemText 
                  primary={item.item}
                  secondary={`Price: ${item.price} x${this.props.selectedNumberOfItemsPerGame[i]}`} />
              </ListItem>
            )
          })}
        </List>
        <Typography style={{marginLeft: 15 }} variant="body2" gutterBottom>
          <span style={{ fontWeight: 'bold', marginRight: 104 }}>Total:</span> {`$${this.state.total}`}
        </Typography>
      </Paper>
    );
  }
}

export default PaymentReviewInfo;