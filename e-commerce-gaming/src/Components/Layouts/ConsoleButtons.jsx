import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import { connect } from 'react-redux'
import { playStationClick,computerClick,handHeldClick,xBoxClick,nintendoClick } from '../../Actions/MainButtonAction';
import FLOW_STATE from '../../Constants/buttonStates'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const style = {

	button: {
		margin: 10,
		color: '#FFF',
		backgroundColor: '#33bbff'
	},

}

const tabStyle = {
	Tabs: {
		margin:15
	}
};



class ConsoleButtons extends React.Component {


	render() {


		return (

			<Tabs
				style={tabStyle.Tabs}
				indicatorColor="primary"
				textColor="primary"
				fullWidth
			>
				<Button  variant="outlined" color="primary" label="Xbox One"  color="inherit" style={style.button}  onClick={this.props.xBoxClick}>
					Xbox One
				</Button>
				<Button  variant="outlined" color="primary" label="PS 4" color="inherit" style={style.button} onClick={this.props.playStationClick}>
					PS 4
				</Button>
				<Button variant="outlined"  color="primary" label="Nintendo" color="inherit" style={style.button} onClick={this.props.nintendoClick}>
					Nintendo
				</Button>
				<Button variant="outlined" color="primary" label="Computer"  color="inherit" style={style.button} onClick={this.props.computerClick}>
					Computer
				</Button>
				<Button variant="outlined" color="primary" label="Game Boy" color="inherit" style={style.button} onClick={this.props.handHeldClick}>
					Game Boy
				</Button>
			</Tabs>
		)


	}




}



const mapStateToProps = (state) => {
	console.log("The mapStateToProps in ConsoleButtons is " + state);
	return {
		state: state,
	};
};

function mapDispatchToProps(dispatch) {
	return {
		xBoxClick: () => dispatch(xBoxClick(FLOW_STATE.XBOXPAGEBUTTON)),
		playStationClick: () => dispatch(playStationClick(FLOW_STATE.PS4PAGEBUTTON)),
		nintendoClick: () => dispatch(nintendoClick(FLOW_STATE.NINTENDOBUTTON)),
		computerClick: () => dispatch(computerClick(FLOW_STATE.COMPUTERPAGEBUTTON)),
		handHeldClick: () => dispatch(handHeldClick(FLOW_STATE.HANDHELDPAGEBUTTON)),

	}
}

export default connect(null,mapDispatchToProps)(ConsoleButtons);

