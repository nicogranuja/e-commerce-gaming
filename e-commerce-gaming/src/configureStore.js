import { createStore, applyMiddleware } from 'redux';
import currentPage from './Reducers/CurrentPageReducer';
import thunk from 'redux-thunk';




export default function configureStore() {
    return createStore (
        currentPage,
        applyMiddleware(thunk)


    );
}


