import  React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import FLOW_STATE from '../Constants/flowstates'
//import PropTypes from 'prop-types';
import mainPageState from '../Actions/MainPageAction'


const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 500,
        overflowY: 'auto'}
};

class SelectedGamesComponent extends React.Component {
   // componentWillMount() {
   //     this.props.initialState();
   // }
    

    render() {
        console.log("The state in SelectedGamesComponentJSX is ");
        console.log(this.props.state);

        if(this.props.state.currentPageState === FLOW_STATE.MAINPAGE) {
            return (
                <div>

                <Grid container>
                    <Grid item sm>
                        <Paper style={styles.Paper}>
                            <div>
                                Inside the main page for unselected console.
                            </div>
                        </Paper>
                    </Grid>

                </Grid>
                 </div>
            )
        } else if (this.props.state.currentPageState === FLOW_STATE.COMPUTERPAGE) {
            return (
                <div>
                <Grid container>
                    <Grid item sm>
                        <Paper style={styles.Paper}>
                            <div>
                                Inside the computer page.
                            </div>
                        </Paper>
                    </Grid>

                </Grid>
                    </div>
            )
        } else if (this.props.state.currentPageState === FLOW_STATE.HANDHELDPAGE) {
            return(
                <div>
            <Grid container>
                <Grid item sm>
                    <Paper style={styles.Paper}>
                        <div>
                            Inside Hand Held Page.
                        </div>
                    </Paper>
                </Grid>

            </Grid>
                    </div>
            )
        } else if (this.props.state.currentPageState === FLOW_STATE.XBOXPAGE) {
            return(
                <div>
                    <Grid container>
                        <Grid item sm>
                            <Paper style={styles.Paper}>
                                <div>
                                    Inside Hand Held Page.
                                </div>
                            </Paper>
                        </Grid>

                    </Grid>
                </div>
            )
        } else if (this.props.state.currentPageState === FLOW_STATE.PS4PAGE) {
            return(
                <div>
                    <Grid container>
                        <Grid item sm>
                            <Paper style={styles.Paper}>
                                <div>
                                    Inside the ps4 page.
                                </div>
                            </Paper>
                        </Grid>

                    </Grid>
                </div>
            )
        } else  {
            return(
                <div>
                    <Grid container>
                        <Grid item sm>
                            <Paper style={styles.Paper}>
                                <div>
                                    No page was selected or there was an error. Check state.
                                </div>
                            </Paper>
                        </Grid>

                    </Grid>
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
        initialState() {
            dispatch(mainPageState(FLOW_STATE.MAINPAGE));
        }
    }
}

let SelectedGamesPage = connect(mapStateToProps,mapDispatchToProps)(SelectedGamesComponent);

export default SelectedGamesPage;








