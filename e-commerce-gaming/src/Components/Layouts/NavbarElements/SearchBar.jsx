import React from 'react';
import { Search } from '@material-ui/icons';
import { TextField, InputAdornment } from '@material-ui/core';
import {connect } from 'react-redux'
import {searchPageState} from './../../../Actions/MainPageAction'
import PAGESTATE from './../../../Constants/flowstates'

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
            <InputAdornment position="start" onClick={this.props.searchPageState}>
              <Search />
            </InputAdornment>
          )
        }}
      />
    );
  }
}

const mapStateToProps = (state) => {
 
  return {
    state: state,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    searchPageState: () => dispatch(searchPageState(PAGESTATE.SEARCH)),



  }
}

export default connect(null,mapDispatchToProps)(SearchBar);