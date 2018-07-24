import  React from 'react';
import { connect } from 'react-redux';
import FLOW_STATE from '../Constants/flowstates'
import BUTTON_STATE from '../Constants/buttonStates'
import {mainPageState} from '../Actions/MainPageAction'
import games from '../gamesList.json'
import GameGrid from './GameGrid'



class SelectedGamesComponent extends React.Component {


    render() {
        if (this.props.state.mainButtonState === BUTTON_STATE.COMPUTERPAGEBUTTON ) {

            return (
                <div>
                    <GameGrid
                        GameList={games.filter(function(game){
                            if(game.console == "computer"){
                                return game;
                            }
                        })}
                    />

                </div>
            )
        }
        if (this.props.state.mainButtonState === BUTTON_STATE.HANDHELDPAGEBUTTON ) {
            return(
                <div>
                    <GameGrid
                        GameList={games.filter(function(game){
                            if(game.console == "hand held"){
                                return game;
                            }
                        })}
                    />

                </div>
            )
        }
        if (this.props.state.mainButtonState === BUTTON_STATE.NINTENDOBUTTON) {
            return(
                <div>
                    <GameGrid
                                GameList={games.filter(function(game){
                                    if(game.console == "nintendo"){
                                        return game;
                                    }
                                })}
                            />

                </div>
            )
        }
        if (this.props.state.mainButtonState === BUTTON_STATE.XBOXPAGEBUTTON ) {
            return(
                <div>
                    <GameGrid
                        GameList={games.filter(function(game){
                            if(game.console == "xbox one"){
                                return game;
                            }
                        })}
                    />

                </div>
            )
        }
        if (this.props.state.mainButtonState === BUTTON_STATE.PS4PAGEBUTTON ) {
            return(
                <div>
                    <GameGrid
                        GameList={games.filter(function(game){
                            if(game.console == "PS4"){
                                return game;
                            }
                        })}
                    />
                                    I
                </div>
            )
        }
        if(this.props.state.currentPageState === FLOW_STATE.REGISTER) {
            return (
                <div>
                    Looks like we are trying to register.
                </div>
            )
        }
        if(this.props.state.currentPageState === FLOW_STATE.SEARCH) {
            return (
                <div>
                    Looks like we are trying to do a search.
                </div>
            )
        }
        if(this.props.state.currentPageState === FLOW_STATE.LOGIN) {
            return (
                <div>
                    Looks like we are trying login.
                </div>
            )
        }
        if(this.props.state.currentPageState === FLOW_STATE.CART ){
            return (
                <div>
                    Looks like we are going to shopping cart.
                </div>
            )
        }
        if(this.props.state.currentPageState === undefined) {
            return(
                <div>
                    No page was selected or there was an error. Check state. Something is broken.
                </div>
            )
        }
        if(this.props.state.currentPageState === FLOW_STATE.MAINPAGE) {
            return (
                <div>
                    <GameGrid GameList={games}/>

                </div>
            )
        }
    }
}


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







