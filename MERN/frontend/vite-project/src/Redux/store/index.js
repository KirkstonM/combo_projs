import { configureStore } from "@reduxjs/toolkit";
import appReducer from '../reducers';


const rootReducer = ({
    login : appReducer
})
export const store = configureStore({
    reducer : rootReducer
});