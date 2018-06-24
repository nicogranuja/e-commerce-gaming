import buttonState from '../Constants/buttonStates'
function CurrentButtonReducer(state = {}, action) {
    console.log("the main button reducer action is " + action.type + " the state is " + state);
    let newState = Object.assign({},state);
    switch(action.type) {
        case 'XBOX_BUTTON_SELECTED':
            newState = action.click;
            return newState;
        case 'PLAYSTATION_BUTTON_SELECTED':
            newState = action.click;
            return newState;
        case 'COMPUTER_BUTTON_SELECTED':
            newState = action.click;
            return newState;
        case 'HANDHELD_BUTTON_SELECTED':
            newState = action.click;
            return newState;
        case 'NINTENDO_BUTTON_SELECTED':
            newState = action.click;
            return newState;

        default :
            console.log("The default  buttonstate is main button reducer is " + state);
            return state;
    }
}

export default CurrentButtonReducer;
