import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'products',

  initialState: {
    data: []
  },

  reducers: {
    setProduct: (state, action) => {
      state.data.push( action.payload )
    }
  }
})

export const { setProduct } = productSlice.actions

export default productSlice.reducer
