import { createSlice } from '@reduxjs/toolkit';

const gen_data = () => {
  const new_object = {}
  new_object['Fall Limited Edition Sneakers'] = {
    data: 0
  };
  
  return new_object
}

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
          data: 0
        }
      }

      if(state.data[action.payload.code].data + action.payload.data > 0)
        state.data[action.payload.code].data += action.payload.data
      else
        state.data[action.payload.code].data = 0
    },
  }
})

export const { addItem } = cartSlice.actions

export default cartSlice.reducer
