import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const reducers = combineReducers({
    //add all the reducer functions here
    amount: amountReducer,
})

export default reducers;