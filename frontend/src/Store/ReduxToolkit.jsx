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
    }
  }
})
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    myData:myDataSlice.reducer
  },
});
export const userActions = userSlice.actions;
export const myDataActions=myDataSlice.actions
