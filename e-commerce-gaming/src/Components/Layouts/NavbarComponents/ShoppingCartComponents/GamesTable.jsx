import React from 'react';
import Table from '@material-ui/core/Table';
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem
} from '@material-ui/core';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    minWidth: 700,
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
    return '$' + total.toFixed(4);
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
                    {item.item}
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
      </Paper>
    );
  }
}

export default GamesTable;