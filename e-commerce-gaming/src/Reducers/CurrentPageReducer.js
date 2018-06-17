import flowState from '../Constants/flowstates'

function CurrentPageReducer(state = flowState.MAINPAGE, action) {

    switch(action.type) {
        case 'COMPUTER_PAGE_ACTION':
            return action.computerState;
        case 'HANDHELD_PAGE_ACTION':
            return action.handHeldState;
        case 'MAIN_PAGE_ACTION':
            return action.mainPageState;
        case 'PS4_PAGE_ACTION':
            return action.ps4State;
        case 'XBOX_PAGE_ACTION':
            return action.xboxState;
        default :
            return state;
    }
}

export default CurrentPageReducer;