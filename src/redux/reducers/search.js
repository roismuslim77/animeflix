const initialState = {
    search: [],
    isError: false,
    isFinish: false,
    isLoading: false
}

const counter = (state = initialState, action)=>{
    switch (action.type){
        case "ADDSEARCH_PENDING":
         return{
            ...state, isLoading: true
         }
        case "ADDSEARCH_FULFILLED":
         return{
             ...state,
             isLoading: false,
             isFinish: true,
             search: action.payload.data.results
         }
        case "ADDASEARCH_REJECTED":
         return{
             ...state,
             isError: true, isLoading: false
         }
         default: 
         return state;
    }
}

export default counter;