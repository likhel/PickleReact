import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fetchStatusSlice from "./fetchStatus";
import bagSlice from "./bagSlice";

const pickleStore = configureStore({
    reducer :{
        items: itemSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer,
        bag: bagSlice.reducer
    }
})

export default pickleStore