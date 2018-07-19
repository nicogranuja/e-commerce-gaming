import flowState from '../Constants/flowstates'
function CurrentPageReducer(state = flowState.MAINPAGE, action) {

    let newState = Object.assign({},state);
    switch(action.type) {
        case 'LOGIN_PAGE_ACTION':
            newState = action.click;
            return newState;
        case 'COMPUTER_PAGE_ACTION':
            newState = action.click;
            return newState;
        case 'REGISTER_PAGE_ACTION':
            newState = action.click;
            return newState;
        case 'CART_PAGE_ACTION':
            newState = action.click;
            return newState;
        case 'SEARCH_PAGE_ACTION':
            newState = action.click;
            return newState;
        default :

            return state;
    }
}

export default CurrentPageReducer;