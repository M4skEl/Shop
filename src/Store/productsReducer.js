import {createSlice} from "@reduxjs/toolkit";



const productsReducer = createSlice({
      name: 'products',
      initialState: {
        products: []
      },
      reducers: {
        getProducts(state, action) {
          state.products = action.payload;
        },
        clearProductsList(state) {
          state.products = [];
        },
      },
    }
)
export default productsReducer.reducer
export const {getProducts, clearProductsList} = productsReducer.actions