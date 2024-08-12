/** @format */

import { configureStore, createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    initial: (state, action) => {
      return action.payload;
    },
    delete: () => {
      return null
    },
  },
});
const myDataSlice=createSlice({
  name:'myData',
  initialState:[],
  reducers:{
    initial:(state,actions)=>{
      return actions.payload
    },
    delete:(state,actions)=>{
      return []
    }
  }
})
const allDataSlice = createSlice({
  name: "allData",
  initialState: [],
  reducers: {
    initial: (state, actions) => {
      return actions.payload;
    },
    delete: (state, actions) => {
      return [];
    },
  },
});
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    myData:myDataSlice.reducer,
    allData:allDataSlice.reducer
  },
});
export const userActions = userSlice.actions;
export const myDataActions=myDataSlice.actions
export const allDataActions=allDataSlice.actions
