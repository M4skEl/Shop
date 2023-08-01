import {configureStore, combineReducers} from "@reduxjs/toolkit";
import locationReducer from "./locationReducer.js"
import categoryReducer from "./categoryReducer.js";
import ProductsReducer from "./productsReducer.js";


const rootReducer = combineReducers({
  location: locationReducer,
  categories: categoryReducer,
  products: ProductsReducer
})
export const store = configureStore(
    {
      reducer: rootReducer,
    }
)
