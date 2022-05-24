import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',

  initialState: {
    data: {
    }
  },

  reducers: {
    addItem: (state, action) => {
      const item = state.data[action.payload.code]

      if(!item) {
        state.data[action.payload.code] = {
          count: 0,
        }
      }

      if(state.data[action.payload.code].count + action.payload.count > 0)
        state.data[action.payload.code].count += action.payload.count
      else
        state.data[action.payload.code].count = 0
    },
  }
})

export const { addItem } = cartSlice.actions

export default cartSlice.reducer
