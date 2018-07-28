import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { connect } from 'react-redux'
import { playStationClick,computerClick,handHeldClick,xBoxClick,nintendoClick, allGamesClick } from '../../Actions/MainButtonAction';
import FLOW_STATE from '../../Constants/buttonStates'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {mainPageState} from './../../Actions/MainPageAction'

const tabStyle = {
	Tabs: {
		margin: 15
	}
};

class ConsoleButtons extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: 0
		};
  }
  
  handleChange = (event, selectedTab) => {
    this.setState({ selectedTab });
  };

	render() {
		return (
			<Tabs
        value={this.state.selectedTab} onChange={this.handleChange}
				style={tabStyle.Tabs}
				indicatorColor="primary"
				textColor="primary"
        fullWidth
        centered
			>
				<Tab label="All" onClick={this.props.allGamesClick} />
				<Tab label="Xbox One" onClick={this.props.xBoxClick} />
				<Tab label="PS4" onClick={this.props.playStationClick} />
				<Tab label="Nintendo" onClick={this.props.nintendoClick} />
				<Tab label="PC" onClick={this.props.computerClick} />
				<Tab label="Hand Held" onClick={this.props.handHeldClick} />
			</Tabs>
		);
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
    allGamesClick: () => dispatch(allGamesClick(FLOW_STATE.ALLGAMESPAGEBUTTON)),
		xBoxClick: () => dispatch(xBoxClick(FLOW_STATE.XBOXPAGEBUTTON)),
		playStationClick: () => dispatch(playStationClick(FLOW_STATE.PS4PAGEBUTTON)),
		nintendoClick: () => dispatch(nintendoClick(FLOW_STATE.NINTENDOBUTTON)),
		computerClick: () => dispatch(computerClick(FLOW_STATE.COMPUTERPAGEBUTTON)),
		handHeldClick: () => dispatch(handHeldClick(FLOW_STATE.HANDHELDPAGEBUTTON)),
	}
}

export default connect(null,mapDispatchToProps)(ConsoleButtons);

