import GENRESTATE from '../Constants/genreButtonStates'
function GenreButtonsReducer(state = null, action) {

    let newState = Object.assign({},state);
    console.log("The genre button state is ");
    console.log(state)

    switch(action.type) {
        case GENRESTATE.ADVENTUREBUTTON:
            newState = action.click;
            return newState;
        case GENRESTATE.RPGBUTTON:
            newState = action.click;
            return newState;
        case GENRESTATE.SHOOTERBUTTON:
            newState = action.click;
            return newState;
        case GENRESTATE.SPORTSPAGEBUTTON:
            newState = action.click;
            return newState;
        case GENRESTATE.STRATEGYBUTTON:
            newState = action.click;
            return newState;
        case GENRESTATE.RACINGBUTTON:
            newState = action.click;
            return newState;

        default :

            return state;
    }
}

export default GenreButtonsReducer;