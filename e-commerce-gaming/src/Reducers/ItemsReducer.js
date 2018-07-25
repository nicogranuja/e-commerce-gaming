
const initialState = { items:[] }

function addToCartReducer(state = initialState, action) {


    let newState = Object.assign({},state);
    
    switch(action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items,{item:action.addItem,price:action.price}]
            }
        
        default :
            console.log("The action type below is ")
            console.log(action.type);
            return state;
    }
}

export default addToCartReducer;