import  React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import FLOW_STATE from '../Constants/flowstates'
import BUTTON_STATE from '../Constants/buttonStates'
import mainPageState from '../Actions/MainPageAction'




class SelectedGamesComponent extends React.Component {


    render() {
        if (this.props.state.mainButtonState === BUTTON_STATE.COMPUTERPAGEBUTTON && this.props.state.currentPageState === FLOW_STATE.MAINPAGE) {

            return (
                <div>

                                    Inside the computer pages.

                </div>
            )
        }

        if (this.props.state.mainButtonState === BUTTON_STATE.HANDHELDPAGEBUTTON && this.props.state.currentPageState === FLOW_STATE.MAINPAGE) {
            return(
                <div>

                            Inside Hand Held Page.

                    </div>
            )
        }
        if (this.props.state.mainButtonState === BUTTON_STATE.NINTENDOBUTTON && this.props.state.currentPageState === FLOW_STATE.MAINPAGE) {
            return(
                <div>

                                    Inside the nintendo page.

                </div>
            )
        }
        if (this.props.state.mainButtonState === BUTTON_STATE.XBOXPAGEBUTTON && this.props.state.currentPageState === FLOW_STATE.MAINPAGE) {
            return(
                <div>

                                    Inside Xbox page

                </div>
            )
        }
        if (this.props.state.mainButtonState === BUTTON_STATE.PS4PAGEBUTTON && this.props.state.currentPageState === FLOW_STATE.MAINPAGE) {
            return(
                <div>

                                    Inside the ps4 page blah blah.

                </div>
            )
        }
        if(this.props.state.currentPageState === undefined) {
            return(
                <div>

                                    No page was selected or there was an error. Check state.

                </div>
            )
        }
        if(this.props.state.currentPageState === FLOW_STATE.MAINPAGE) {
            return (
                <div>


                                    Inside the main page for unselected console.

                </div>
            )
        }
    }
}

// SelectedGamesComponent.PropTypes= {
//     currentState: PropTypes.string.isRequired
// };

const mapStateToProps = (currentPageState) => {
    // console.log("The mapStateTpProps in SelectedGamesComponent is " + currentPage);
    console.log(currentPageState);

    return {
        state: currentPageState,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        initialState: () =>
            dispatch(mainPageState(FLOW_STATE.MAINPAGE))

    }
}

let SelectedGamesPage = connect(mapStateToProps,mapDispatchToProps)(SelectedGamesComponent);

export default SelectedGamesPage;








