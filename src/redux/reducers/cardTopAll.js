const initialState = {
    cardTopAll: [],
    isLoading: false,
    isFinish: false,
    isError: false
}

const card = (state = initialState, action)=>{
    switch (action.type){
        case "ADDANIMTOP_PENDING":
         return{
            ...state, isLoading: true
         }
        case "ADDANIMTOP_FULFILLED":
         return{
             ...state,
             isLoading: false,
             isFinish: true,
             cardTopAll: action.payload.data.results
         }
        case "ADDANIMTOP_REJECTED":
         return{
             ...state,
             isError: true, isLoading: false
         }
         default: 
         return state;
    }
}

export default card;


        // case "ADD_ANIMTOP":
        //  const top ={
        //      cardTopAll:action.payload
        //  }
        //  return top;