const initialState = {
    relateList: []
}

const card = (state = initialState, action)=>{
    switch (action.type){
        case "ADD_RELATE":
         const pop ={
             relateList:action.payload
         }
         return pop;
         default: 
         return state;
    }
}

export default card;