// import React from 'react';
// import {connect } from 'react-redux'
// import {
//   AccountBox,
//   SupervisorAccount,
//   ShoppingCart
// } from '@material-ui/icons';
// import { Button } from '@material-ui/core';
// import {loginPageState,registerPageState,cartPageState} from './../../../Actions/MainPageAction'
// import PAGESTATE from './../../../Constants/flowstates'

// const styles = {
//   button: {
//     margin: 10,
//     color: '#FFF',
//     backgroundColor: '#1D8BF1'
//   },
//   icon: {
//     marginLeft: 5
//   }
// }

// class NavbarButtons extends React.Component {

//   render() {
//     return (
//       <div>
//         <Button onClick={this.props.loginPageState} variant="contained" size="small" color="inherit" style={styles.button}>
//           Login
//           <AccountBox style={styles.icon} />
//         </Button>
//         <Button onClick={this.props.registerPageState} variant="contained" size="small" color="inherit" style={styles.button}>
//           Register
//           <SupervisorAccount style={styles.icon} />
//         </Button>
//         <Button  onClick={this.props.cartPageState} variant="contained" size="small" color="inherit" style={styles.button}>
//           Cart
//           <ShoppingCart style={styles.icon} />
//         </Button>
//       </div>
//     );
//   }
// }


// const mapStateToProps = (state) => {
    
//     return {
//         state: state,
//     };
// };

// function mapDispatchToProps(dispatch) {
//     return {
//         loginPageState: () => dispatch(loginPageState(PAGESTATE.LOGIN)),
//         registerPageState: () => dispatch(registerPageState(PAGESTATE.REGISTER)),
//         cartPageState: () => dispatch(cartPageState(PAGESTATE.CART)),


//     }
// }

// export default connect(null,mapDispatchToProps)(NavbarButtons);

