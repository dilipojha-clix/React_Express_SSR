import { FETCH_USER } from "../action"

export default function userReducers (state=[],action)  {
    console.log("action.payload",state,action)
    switch(action.type){
        
        case FETCH_USER:
            
        return action.payload.data;
        
        default:
        return state
    }

}