import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class ConsoleButtons extends React.Component {

    render() {

        return (
            <Tabs

                indicatorColor="primary"
                textColor="primary"
                fullWidth
            >
                <Tab label="Xbox One" />
                <Tab label="PS 4" />
                <Tab label="Nintendo" />
                <Tab label="Computer" />
                <Tab label="Game Boy" />
            </Tabs>
        )


    }


}


export default ConsoleButtons;