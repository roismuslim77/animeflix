const initialState = {
    token: [],
    user: [],
    isLoading: false,
    isFinish: false,
    isError: false
}


export default (state = initialState, action) => {
    switch (action.type) {
        // case login
        case "LOGIN":
         return {
            token: action.payload.access_token,
            user: action.payload.user
         }
        default:
            return state
    }
}