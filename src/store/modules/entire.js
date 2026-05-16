import { createSlice } from '@reduxjs/toolkit'
const entireSlice = createSlice({
  name: 'entire',
  initialState: { 
    name: 'entire',
    age: 18
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload
    }
  }
})

export const { changeName } = entireSlice.actions
export default entireSlice.reducer