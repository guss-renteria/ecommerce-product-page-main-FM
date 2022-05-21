import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',

  initialState: {
    data: {}
  },

  reducers: {
    setItem: (state, action) => {
      state.data[action.payload.name] = action.payload.data
    }
  }
})

export const { setItem } = cartSlice.actions

export default cartSlice.reducer
