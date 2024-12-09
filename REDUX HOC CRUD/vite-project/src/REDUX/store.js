import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducersim.js";

export const store = configureStore({ reducer : appReducer })