const initialState = {
    url: ''
}

const counter = (state = initialState, action)=>{
    switch (action.type){
        case "ADD_URL":
         const newState ={
             url:action.payload
         }
         return newState;
         default: 
         return state;
    }
}

export default counter;