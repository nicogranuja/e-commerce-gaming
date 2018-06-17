import  React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import FLOW_STATE from '../Constants/flowstates'
import PropTypes from 'prop-types';


const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 500,
        overflowY: 'auto'}
};

class SelectedGamesComponent extends React.Component {
    render() {
        if(this.props.state === FLOW_STATE.MAINPAGE) {
            return (
                <div>

                <Grid container>
                    <Grid item sm>
                        <Paper style={styles.Paper}>
                            <div>
                                Inside the main page
                            </div>
                        </Paper>
                    </Grid>

                </Grid>
                 </div>
            )
        } else if (this.props.state === FLOW_STATE.COMPUTERPAGE) {
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
        } else {
            return(
                <div>
            <Grid container>
                <Grid item sm>
                    <Paper style={styles.Paper}>
                        <div>
                            Did not get into the other pages.
                        </div>
                    </Paper>
                </Grid>

            </Grid>
                    </div>
            )
        }
    }
}

SelectedGamesComponent.PropTypes= {
    state: PropTypes.string.isRequired
};

export const mapStateToProps = (state) => {
    return {
        state: state.currentPage,
    };
};

let SelectedGamesPage = connect(mapStateToProps)(SelectedGamesComponent);

export default SelectedGamesPage;








