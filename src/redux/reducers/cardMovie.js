const initialState = {
    cardMovie: [],
    isLoading: false,
    isFinish: false,
    isError: false
}

const card = (state = initialState, action)=>{
    switch (action.type){
        case "ADDMOVALL_PENDING":
         return{
            ...state, isLoading: true
         }
        case "ADDMOVALL_FULFILLED":
         return{
             ...state,
             isLoading: false,
             isFinish: true,
             cardMovie: action.payload.data.results
         }
        case "ADDMOVALL_REJECTED":
         return{
             ...state,
             isError: true, isLoading: false
         }
         default: 
         return state;
    }
}

export default card;