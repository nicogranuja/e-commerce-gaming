import buttonState from '../Constants/buttonStates'
function CurrentButtonReducer(state = {}, action) {
   
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
            
            return state;
    }
}

export default CurrentButtonReducer;