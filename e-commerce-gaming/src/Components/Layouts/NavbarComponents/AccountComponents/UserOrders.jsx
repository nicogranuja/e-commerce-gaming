import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Select, MenuItem } from '@material-ui/core';
import OrderCard from './OrderComponents/OrderCard';


const styles = {
  ordersFilter: {
    marginBottom: 10
  } 
}

class UserSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabValue: 1,
      filterOrdersValue: 'past 6 months'
    };
  }

  handleTabClick = () => {
    this.props.onTabClick(this.state.tabValue);
  };

  handleChangeFilterOrdersBy = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  
  render() {
    let orders = this.props.state.currentUserHandler.user.userOrders;
    return (
      <Fragment>
        <div style={styles.ordersFilter}>
          <span style={{fontWeight: 'bold' }}> {orders.length + ' orders'} </span>
          <span>
            placed in
            <Select
              style={{ marginLeft: 10 }}
              value={this.state.filterOrdersValue}
              inputProps={{
                name: 'filterOrdersValue'
              }}
              onChange={this.handleChangeFilterOrdersBy}
            >
              <MenuItem value={'past 6 months'}>past 6 months</MenuItem>
              <MenuItem value={'2017'}>2017</MenuItem>
              <MenuItem value={'2016'}>2016</MenuItem>
              <MenuItem value={'2015'}>2015</MenuItem>
              <MenuItem value={'2014'}>2014</MenuItem>
            </Select>
          </span>
        </div>
        {orders.map((order, i) => {
          return <OrderCard 
            key={i}
            imgURL={order.url}
            gameTitle={order.title}
            price={order.price}
            orderPlacedOn={'August 14th 2018'}
          />
        })}
      </Fragment>
    )
  }
}

const mapStateToProps = (currentPageState) => {
  return {
    state: currentPageState,
  };
};

export default connect(mapStateToProps, null)(UserSettings);