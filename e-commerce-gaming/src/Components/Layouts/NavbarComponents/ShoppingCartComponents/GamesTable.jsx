import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
  }

  render () {
    const itemObjects = this.props.itemObjects;
    console.log(this.props);
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
                  <TableCell numeric> 1 </TableCell>
                  <TableCell numeric> {item.price} </TableCell>
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