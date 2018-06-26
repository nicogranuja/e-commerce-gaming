import flowState from '../Constants/flowstates'
function CurrentPageReducer(state = flowState.MAINPAGE, action) {

    let newState = Object.assign({},state);
    switch(action.type) {
        case 'XBOX_PAGE_ACTION':
            newState = action.click;
            return newState;
        case 'COMPUTER_PAGE_ACTION':
            newState = action.click;
            return newState;
        case 'HANDHELD_PAGE_ACTION':
            newState = action.click;
            return newState;
        case 'PS4_PAGE_ACTION':
            newState = action.click;
            return newState;
        case 'XBOX_PAGE_ACTION':
            newState = action.click;
            return newState;
        default :

            return state;
    }
}

export default CurrentPageReducer;