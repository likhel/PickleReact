import {createSlice} from "@reduxjs/toolkit"


const getInitialCart = () => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  };

const bagSlice = createSlice({
    name: 'bag',
    initialState: [],
    reducers: {
        addToBag: (state, action) => {
            state.push(action.payload);
            // const exist = state.find((x) => x.id === action.payload.id);
            // if (exist) {
            //   // Increase the quantity
            //   state.map((x) =>
            //     x.id === product.id ? { ...x, qty: x.qty + 1 } : x
            //   );
            // } else {
            //    [...state, { ...product, qty: 1 }];
            // }
            // // Update localStorage
            // localStorage.setItem("cart", JSON.stringify(updatedCart));
        },

        removeFromBag :(state,action) =>{
            return state.filter(ItemId => ItemId!= action.payload)
        }
        
            
    }
});

export const bagActions = bagSlice.actions
export default bagSlice