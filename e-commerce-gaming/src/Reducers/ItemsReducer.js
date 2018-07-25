
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
            
            return state;
    }
}

export default addToCartReducer;