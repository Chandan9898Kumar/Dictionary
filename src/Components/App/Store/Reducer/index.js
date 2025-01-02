import { WordReducer, LoadingReducer } from "./Reducer";

import { combineReducers } from "@reduxjs/toolkit";

const Reducer = combineReducers({
  word: WordReducer,
  isLoading: LoadingReducer,
});


export default Reducer