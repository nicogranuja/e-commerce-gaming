import {combineReducers} from 'redux';
import currentPageState from './CurrentPageReducer'
import mainButtonState from './MainButtonReducer'
import genreButtonState from './GenreButtonsReducer'
import addToCartReducer from './ItemsReducer'

export default combineReducers({
    currentPageState,
    mainButtonState,
    genreButtonState,
    addToCartReducer

})