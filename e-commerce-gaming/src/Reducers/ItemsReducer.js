
const initialState = { items:[] }

let isNewGameInCart = (gamesInCart, game) => {
  for (let i = 0; i < gamesInCart.length; i++) {
    if (gamesInCart[i].title === game.title) {
      return false;
    }
  }
  return true;
};

let addToCartReducer = (state = initialState, action) => {
  let newState = Object.assign({},state);
  
  switch(action.type) {
    case 'ADD_ITEM':
      if (isNewGameInCart(state.items, action.item)) {
        return {
          ...state,
          items: [...state.items, action.item]
        }
      }
  }
  return state;
}

export default addToCartReducer;