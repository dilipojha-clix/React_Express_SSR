import { combineReducers } from "redux";
import userReducers from "./userReducers";
/* 
export const rootReducer = () =>{
    combineReducers({
        users:userReducers
    })
}
 */
export default function createReducer() {
    return combineReducers({
        users:userReducers
    })
    }
    
   /*  export const store = createStore(
    createReducer(),)  */