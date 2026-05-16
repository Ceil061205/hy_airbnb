import { createSlice } from "@reduxjs/toolkit";


const homeSlice = createSlice({
  name: 'home',
  initialState: {
    name: 'home',
    age: 18
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload
    },
    changeAge(state, action) {
      state.age = action.payload
    },
  }
})

export const { changeName, changeAge } = homeSlice.actions
export default homeSlice.reducer