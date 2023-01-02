import { configureStore } from "@reduxjs/toolkit";
import CartsSlice from "../Slice/CartsSlice";

const Mystore=configureStore({
    reducer:{
        carts:CartsSlice.reducer
    }
})


export default Mystore