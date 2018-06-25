import React from 'react';
import { Search } from '@material-ui/icons';
import { TextField, InputAdornment } from '@material-ui/core';

const styles = {
  searchText: {
    paddingTop: 5,
    right: 370,
    position: 'absolute',
    backgroundColor: 'white'
  }
}

class SearchBar extends React.Component {
  render() {
    return(
      <TextField
        style={styles.searchText}
        placeholder='Search'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          )
        }}
      />
    );
  }
}

export default SearchBar;