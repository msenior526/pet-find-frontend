const initialState = {
    loggedIn: false,
    authChecked: false,
    currentUser: {}
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}