const initialState = {
    cardPopular: [],
    isLoading: false,
    isFinish: false, 
    isError: false
}

const card = (state = initialState, action)=>{
    switch (action.type){
        case "ADD_ANIMPOP_PENDING":
         return{
            ...state, isLoading: true
         }
        case "ADD_ANIMPOP_FULFILLED":
         return{
             ...state,
             isLoading: false,
             isFinish: true,
             cardPopular: action.payload
         }
        case "ADD_ANIMPOP_REJECTED":
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