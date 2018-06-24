import {combineReducers} from 'redux';
import currentPageState from './CurrentPageReducer'
import mainButtonState from './MainButtonReducer'

export default combineReducers({
    currentPageState,
    mainButtonState

})