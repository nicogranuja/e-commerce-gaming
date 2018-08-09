import  React from 'react';
import { connect } from 'react-redux';
import FLOW_STATE from '../Constants/flowstates'
import BUTTON_STATE from '../Constants/buttonStates'
import {mainPageState} from '../Actions/MainPageAction'
import games from '../gamesList.json'
import GameGrid from './GameGrid'




class SelectedGamesComponent extends React.Component {


    render() {

        const wordSearch = this.props.state.searchState.name;





        if (this.props.state.mainButtonState === BUTTON_STATE.COMPUTERPAGEBUTTON && this.props.state.genreButtonState == null) {


            return (
                <div>
                    <GameGrid
                        GameList={games.filter(function(game){
                        if(game.console == "computer" ){
                                return game;
                            }

                        })}
                    />

                </div>
            )

        }
        if (this.props.state.mainButtonState === BUTTON_STATE.COMPUTERPAGEBUTTON && this.props.state.genreButtonState != null) {
            if( this.props.state.genreButtonState == "SPORTS_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "computer" && game.genre == "Sports" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "RPG_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "computer" && game.genre == "Roleplaying" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "SHOOTER_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "computer" && game.genre == "Shooter" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            }  else if( this.props.state.genreButtonState == "ADVENTURE_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "computer" && game.genre == "Action-adventure" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "STRATEGY_BUTTON_SELECTED"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "computer" && game.genre == "Strategy" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "RACING_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "computer" && game.genre == "Racing" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            }



        }
        if (this.props.state.mainButtonState === BUTTON_STATE.NINTENDOBUTTON && this.props.state.genreButtonState == null) {


            return (
                <div>
                    <GameGrid
                        GameList={games.filter(function(game){
                        if(game.console == "nintendo" ){
                                return game;
                            }

                        })}
                    />

                </div>
            )

        }
        if (this.props.state.mainButtonState === BUTTON_STATE.NINTENDOBUTTON && this.props.state.genreButtonState != null) {
            if( this.props.state.genreButtonState == "SPORTS_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "nintendo" && game.genre == "Sports" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "RPG_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "nintendo" && game.genre == "Roleplaying" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "SHOOTER_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "nintendo" && game.genre == "Shooter" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            }  else if( this.props.state.genreButtonState == "ADVENTURE_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "nintendo" && game.genre == "Action-adventure" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "STRATEGY_BUTTON_SELECTED"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "nintendo" && game.genre == "Strategy" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "RACING_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "nintendo" && game.genre == "Racing" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            }



        }
        if (this.props.state.mainButtonState === BUTTON_STATE.XBOXPAGEBUTTON && this.props.state.genreButtonState == null) {


            return (
                <div>
                    <GameGrid
                        GameList={games.filter(function(game){
                        if(game.console == "xbox one" ){
                                return game;
                            }

                        })}
                    />

                </div>
            )

        }
        if (this.props.state.mainButtonState === BUTTON_STATE.XBOXPAGEBUTTON && this.props.state.genreButtonState != null) {
            if( this.props.state.genreButtonState == "SPORTS_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "xbox one" && game.genre == "Sports" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "RPG_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "xbox one" && game.genre == "Roleplaying" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "SHOOTER_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "xbox one" && game.genre == "Shooter" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            }  else if( this.props.state.genreButtonState == "ADVENTURE_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "xbox one" && game.genre == "Action-adventure" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "STRATEGY_BUTTON_SELECTED"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "xbox one" && game.genre == "Strategy" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "RACING_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "xbox one" && game.genre == "Racing" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            }



        }
        if (this.props.state.mainButtonState === BUTTON_STATE.PS4PAGEBUTTON && this.props.state.genreButtonState == null) {


            return (
                <div>
                    <GameGrid
                        GameList={games.filter(function(game){
                        if(game.console == "PS4" ){
                                return game;
                            }

                        })}
                    />

                </div>
            )

        }
        if (this.props.state.mainButtonState === BUTTON_STATE.PS4PAGEBUTTON && this.props.state.genreButtonState != null) {
            if( this.props.state.genreButtonState == "SPORTS_BUTTON"){
            return (
                <div>
                    <GameGrid
                        GameList={games.filter(function(game){
                        if(game.console == "PS4" && game.genre == "Sports" ){
                                return game;
                            }

                        })}
                    />
                </div>
            )
            } else if( this.props.state.genreButtonState == "RPG_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "PS4" && game.genre == "Roleplaying" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "SHOOTER_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "PS4" && game.genre == "Shooter" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            }  else if( this.props.state.genreButtonState == "ADVENTURE_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "PS4" && game.genre == "Action-adventure" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "STRATEGY_BUTTON_SELECTED"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "PS4" && game.genre == "Strategy" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "RACING_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "PS4" && game.genre == "Racing" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            }



        }





        if(this.props.state.currentPageState === FLOW_STATE.SEARCH ) {


            return (

                <div>

                    <GameGrid
                        GameList={games.filter(function(game){

                            if(game.title.includes(wordSearch)){

                                return game;
                            }


                        })}
                    />

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







