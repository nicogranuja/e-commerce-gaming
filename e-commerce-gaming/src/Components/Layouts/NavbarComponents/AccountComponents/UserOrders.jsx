import React, { Fragment } from 'react';
import { Select, MenuItem } from '@material-ui/core';
import OrderCard from './OrderComponents/OrderCard';

const orders = [
  {
    imgURL: "http://www.agmamagazine.com/wp-content/uploads/2018/05/3-10.jpg",
    gameTitle: "Battlefield",
    price: "$49.99",
    orderPlacedOn: "July 1, 2018"
  },
  {
    imgURL: "https://wakkap.s3.amazonaws.com/games/covers/5b16/740e/a775/3b00/1cfe/7960/thumb/Crash-bandicoot-nsane-trilogy-xbox-one.jpg?1528198158",
    gameTitle: "Crash Bandicoot",
    price: "$39.99",
    orderPlacedOn: "May 17, 2018"
  },
  {
    imgURL: "https://media.contentapi.ea.com/content/dam/eacom/en-us/migrated-images/2016/11/news-article-images-star-wars-goh-splash.jpg.adapt.crop191x100.1200w.jpg",
    gameTitle: "Star Wars",
    price: "$79.99",
    orderPlacedOn: "May 4, 2018"
  },
  {
    imgURL: "https://images-na.ssl-images-amazon.com/images/I/81Cw4g1uRKL._SX342_.jpg",
    gameTitle: "The Last of Us",
    price: "$29.99",
    orderPlacedOn: "April 22, 2018"
  },
];

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
            imgURL={order.imgURL}
            gameTitle={order.gameTitle}
            price={order.price}
            orderPlacedOn={order.orderPlacedOn}
          />
        })}
      </Fragment>
    )
  }
}

export default UserSettings;