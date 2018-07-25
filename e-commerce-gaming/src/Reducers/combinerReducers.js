import {combineReducers} from 'redux';
import currentPageState from './CurrentPageReducer'
import mainButtonState from './MainButtonReducer'
import genreButtonState from './GenreButtonsReducer'
import addToCartReducer from './ItemsReducer'
import searchState from './SearchReducer'

export default combineReducers({
    currentPageState,
    mainButtonState,
    genreButtonState,
    addToCartReducer,
    searchState

})