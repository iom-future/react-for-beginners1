export const counterReducer = (state,action)=>{
        switch (action.type) {
            case "increment":
                return {...state,count:state.count+1}
            case "decrement":
                return {...state,count:state.count-1}
            case "incrementBy":
                return {...state,count:state.count+action.incrementBy}
            case "decrementBy":
                return {...state,count:state.count-action.decrementBy}
            case "reset":
                return {...state,count:0}
            default :
            return state
        }

}
