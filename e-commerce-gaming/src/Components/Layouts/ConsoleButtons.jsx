import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Button from '@material-ui/core/Tab';
import { connect } from 'react-redux'
import { playStationClick,computerClick,handHeldClick,xBoxClick,nintendoClick } from '../../Actions/MainButtonAction';
import FLOW_STATE from '../../Constants/buttonStates'

const styles = theme => ({
	button: {
		margin: theme.spacing.unit,
	},
	input: {
		display: 'none',
	},
});

class ConsoleButtons extends React.Component {


	render() {


		return (

			<Tabs

				indicatorColor="primary"
				textColor="primary"
				fullWidth
			>
				<Button  label="Xbox One"  onClick={this.props.xBoxClick}/>
				<Button label="PS 4" onClick={this.props.playStationClick}/>
				<Button label="Nintendo" onClick={this.props.nintendoClick}/>
				<Button label="Computer" onClick={this.props.computerClick}/>
				<Button label="Game Boy" onClick={this.props.handHeldClick}/>
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

