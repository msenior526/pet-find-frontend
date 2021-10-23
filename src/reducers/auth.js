const initialState = {
    loggedIn: false,
    authChecked: false,
    currentUser: {}
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'AUTHENTICATED':
            return {
                loggedIn: true,
                authChecked: true,
                currentUser: action.payload
            }
            
        default:
            return state;
    }
}