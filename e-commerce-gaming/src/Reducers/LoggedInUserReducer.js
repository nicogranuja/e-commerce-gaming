const initialState = { user: {}, isLoggedIn: false };

let updateLocalStorageWithUser = (user) => {
  // save to local storage
};

let currentUserHandler = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      updateLocalStorageWithUser(action.user);
      for (let userProp in action.user) {
        state.user[userProp] = action.user[userProp];
      }
      console.log('update user now it is user is', state.user);
      return {
        ...state,
        user: state.user
      }
    case 'UPDATE_LOGIN_STATUS':
      console.log('updated is logged in with', action.isLoggedIn);
      return {
        ...state,
        isLoggedIn: action.isLoggedIn
      }
  }
  return state;
}

export default currentUserHandler;