import flowState from '../Constants/flowstates'
function CurrentPageReducer(state = flowState.MAINPAGE, action) {
console.log("the page reducer action is " + action.type + " and the state is " + state);
    let newState = Object.assign({},state);
    switch(action.type) {
        case 'XBOX_PAGE_ACTION':
            newState = action.xBoxState;
            return newState;
        default :
            console.log("The default page state is " + state)
            return state;
    }
}

export default CurrentPageReducer;