import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class ConsoleButtons extends React.Component {

    // handleHomeClick = (e) => {
    //
    //     const element = (
    //         <div className="Home">
    //             <Home/>
    //         </div>
    //     )
    //     ReactDOM.render(element, document.getElementById('pageView'));
    //
    // };

    
    
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

// <Tab label="Xbox One" onClick={(e) => this.handleHomeClick(e)} />
// <Tab label="PS 4" onClick={(e) => this.handleHomeClick(e)}/>
// <Tab label="Nintendo" onClick={(e) => this.handleHomeClick(e)}/>
// <Tab label="Computer" onClick={(e) => this.handleHomeClick(e)}/>
// <Tab label="Game Boy" onClick={(e) => this.handleHomeClick(e)}/>

}


export default ConsoleButtons;