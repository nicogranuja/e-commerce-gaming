function addToCartReducer(state = {}, action) {

    let newState = Object.assign({},state);
    console.log("The item button state is ");
    console.log(state)

    switch(action.type) {
        case 'ADD_ITEM':
            newState = action.click;
            return newState;
        
        default :

            return state;
    }
}

export default addToCartReducer;