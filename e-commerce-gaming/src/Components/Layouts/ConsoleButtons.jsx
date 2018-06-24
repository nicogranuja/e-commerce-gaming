import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
  root: {
	
  }
};

class ConsoleButtons extends React.Component {
	render() {
		return (
			<div style={styles.root}>
				<Tabs
					value={0}
					indicatorColor="primary"
					textColor="inherit"
					fullWidth
					centered
				>
					<Tab label="All" />            
					<Tab label="Xbox One" />
					<Tab label="PS 4" />
					<Tab label="Nintendo" />
					<Tab label="Computer" />
					<Tab label="Game Boy" />
				</Tabs>
			</div>
		)
	}
}

export default ConsoleButtons;