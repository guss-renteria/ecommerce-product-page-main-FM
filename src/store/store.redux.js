import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '../reducers/cart.reducer'
import productReducer from '../reducers/products.reducer'

export default configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  }
})
