import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {connect } from 'react-redux'
import {rpgClick,shooterClick,sportsClick,strategyClick,adventureClick, racingClick} from './../Actions/GenreButtonAction'
import GENRESTATE from './../Constants/genreButtonStates'

class GenreButtons extends React.Component {
    render() {
        return (
            <div>
                Sort By Genre Below:
                <List component="nav">
                    <Divider light />
                    <ListItem button onClick={this.props.rpgClick} >
                        <ListItemText primary="RPG" />
                    </ListItem>
                    <Divider />
                    <ListItem button divider onClick={this.props.shooterClick} >
                        <ListItemText primary="Shooter" />
                    </ListItem>
                    <ListItem button onClick={this.props.sportsClick} >
                        <ListItemText primary="Sports" />
                    </ListItem>
                    <Divider light />
                    <ListItem button onClick={this.props.strategyClick} >
                        <ListItemText primary="Strategy" />
                    </ListItem>
                    <Divider light />
                    <ListItem button onClick={this.props.adventureClick} >
                        <ListItemText primary="Action-Adventure" />
                    </ListItem>
                    <Divider light />
                    <ListItem button onClick={this.props.racingClick} >
                        <ListItemText primary="Racing" />
                    </ListItem>
                    <Divider light />
                </List>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        state: state,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        rpgClick: () => dispatch(rpgClick(GENRESTATE.RPGBUTTON)),
        shooterClick: () => dispatch(shooterClick(GENRESTATE.SHOOTERBUTTON)),
        sportsClick: () => dispatch(sportsClick(GENRESTATE.SPORTSPAGEBUTTON)),
        strategyClick: () => dispatch(strategyClick(GENRESTATE.STRATEGYBUTTON)),
        adventureClick: () => dispatch(adventureClick(GENRESTATE.ADVENTUREBUTTON)),
        racingClick: () => dispatch(racingClick(GENRESTATE.RACINGBUTTON))


    }
}

export default connect(null,mapDispatchToProps)(GenreButtons);