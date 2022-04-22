import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import createReducer from '../client/reducers';
export default ()=>{
    const store = createStore(createReducer(),{},applyMiddleware(thunk));
    return store;
}