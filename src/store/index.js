import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fetchStatusSlice from "./fetchStatus";
import bagSlice from "./bagSlice";
import authReducer from "./authSlice";

const pickleStore = configureStore({
    reducer :{
        items: itemSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer,
        bag: bagSlice.reducer,
        auth: authReducer
    }
})

export default pickleStore