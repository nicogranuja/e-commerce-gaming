import React from 'react';
import Table from '@material-ui/core/Table';
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  Button
} from '@material-ui/core';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    minWidth: 700,
  },
  totalButton: { 
    float: 'right',
    pointerEvents: 'none', 
    cursor: 'initial', 
    width: '100%'
  }

};

class GamesTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNumberOfItemsPerGame: []
    }
  }

  handleSelectChange = (itemIndex, e) => {
    let arr = this.state.selectedNumberOfItemsPerGame;
    arr[itemIndex] = e.target.value;
    this.setState({ selectedNumberOfItemsPerGame: arr });
  };

  componentWillMount = () => {
    this.createEmptyNumberOfGamesArr()
  };

  createEmptyNumberOfGamesArr = () => {
    let arr = [];
    for (let i = 0; i < this.props.itemObjects.length; i++) {
      arr.push(1);
    }
    this.setState({ selectedNumberOfItemsPerGame: arr });
  };

  getPriceBasedOnTotalItems = (price, itemIndex) => {
    let priceFloat = parseFloat(price.slice(1, price.length));
    let total = priceFloat * this.state.selectedNumberOfItemsPerGame[itemIndex];
    return '$' + total.toFixed(2);
  };

  getTotalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < this.props.itemObjects.length; i++) {
      let price = this.props.itemObjects[i].price;
      let priceFloat = parseFloat(price.slice(1, price.length));
      let totalForGame = priceFloat * this.state.selectedNumberOfItemsPerGame[i];
      totalPrice += totalForGame;
    }
    return totalPrice.toFixed(2);
  };

  render () {
    const itemObjects = this.props.itemObjects;
    
    return (
      <Paper style={styles.root}>
        <Table style={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell> Title</TableCell>
              <TableCell numeric> Price</TableCell>
              <TableCell numeric> Quantity</TableCell>
              <TableCell numeric> Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {itemObjects.map((item, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>
                    {item.title}
                  </TableCell>
                  <TableCell numeric>{item.price}</TableCell>
                  <TableCell numeric> 
                    <Select
                      value={this.state.selectedNumberOfItemsPerGame[i]}
                      onChange={ (e) => this.handleSelectChange(i, e)}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell numeric> {this.getPriceBasedOnTotalItems(item.price, i)} </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <Button variant="contained" size="medium" style={styles.totalButton} color="default">
          <div style={{ position: 'absolute',  left: 845 }}>${this.getTotalPrice()}</div>
        </Button>
      </Paper>
    );
  }
}

export default GamesTable;