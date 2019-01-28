const initialState = {
    cardPopular: [],
    isLoading: false,
    isFinish: false, 
    isError: false
}

const card = (state = initialState, action)=>{
    switch (action.type){
        case "ADDANIMPOP_PENDING":
         return{
            ...state, isLoading: true
         }
        case "ADDANIMPOP_FULFILLED":
         return{
             ...state,
             isLoading: false,
             isFinish: true,
             cardPopular: action.payload.data.results
         }
        case "ADDANIMPOP_REJECTED":
         return{
             ...state,
             isError: true, isLoading: false
         }
         default: 
         return state;
    }
}

export default card;



//  const pop ={
        //      cardPopular:action.payload
        //  }
        //  return pop;