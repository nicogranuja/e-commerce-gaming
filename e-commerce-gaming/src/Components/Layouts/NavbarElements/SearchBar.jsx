import React from 'react';
import PropTypes from 'prop-types';
import { Search } from '@material-ui/icons';
import { TextField, InputAdornment } from '@material-ui/core';
import {connect } from 'react-redux'
import {searchPageState} from './../../../Actions/SearchAction'
import PAGESTATE from './../../../Constants/flowstates'

const styles = {
  searchText: {
    padding: 2,
    marginRight: 10,
    right: 370,
    position: 'absolute',
    backgroundColor: 'white'
  }
}

class SearchBar extends React.Component {


  handleChange = search => event => {
    this.props.searchPageState({
      [search]: event.target.value,
    });
  };

  render() {
  console.log("The search state is ")
    console.log(this.props)
    return(

      <TextField
          onChange={this.handleChange('name')}
          style={styles.searchText}
          placeholder='Search'

        InputProps={{
          startAdornment: (
            <InputAdornment position="start" >
              <Search />
            </InputAdornment>
          )
        }}
      />
    );
  }
}

SearchBar.propTypes = {
  search: PropTypes.string.isRequired
};



function mapDispatchToProps(dispatch) {
  return {
    searchPageState: (click) => dispatch(searchPageState(click)),



  }
}

export default connect(null,mapDispatchToProps)(SearchBar);