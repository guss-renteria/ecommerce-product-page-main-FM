import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'products',

  initialState: {
    data: {}
  },

  reducers: {
    setProduct: (state, action) => {
      state.data[action.payload.name] = action.payload.data
    }
  }
})

export const { setProduct } = productSlice.actions

export default productSlice.reducer
