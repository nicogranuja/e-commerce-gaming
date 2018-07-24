
const initialState = { items:[] }

function addToCartReducer(state = initialState, action) {


    let newState = Object.assign({},state);
    console.log("The item button state is ");
    console.log(state)

    switch(action.type) {
        case 'ADD_ITEM':
            // newState = action.click;
            // console.log("The action type is ")
            // console.log(action.type);
            // initialState.push(action.type);
            return {
                ...state,
                items: [...state.items,action.addItem]
            }
        
        default :
            console.log("The action type below is ")
            console.log(action.type);
            return state;
    }
}

export default addToCartReducer;