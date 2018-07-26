/**
 * Created by Justin on 7/25/18.
 */




function SearchReducer(state = {}, action) {


    let newState = Object.assign({},state);

    switch(action.type) {
        case 'SEARCH_PAGE_ACTION':
            console.log("inside the search reducer")
            newState = action.click;
            return newState;

        default :

            return newState;
    }
}

export default SearchReducer;
