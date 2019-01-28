const initialState = {
    details: [],
    isLoading: false,
    isFinish: false,
    isError: false,
}

const card = (state = initialState, action)=>{
    switch (action.type){
        case "ADDDETAILS_PENDING":
            return{
                ...state,
                isLoading: true
            }
        case "ADDDETAILS_FULFILLED":
            return{
                ...state,
                isLoading: false,
                isFinish: true,
                details: action.payload.data.results
            }
        case "ADDDETAILS_REJECTED":
            return{
                ...state,
                isLoading: false,
                isError: true,
            }
         default: 
         return state;
    }
}

export default card;