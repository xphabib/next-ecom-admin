import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Iproduct {
    id: string
    title: string
    image: string
    price: number
    quantity: number
}

const initialState: Array<Iproduct> = [];

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Iproduct>) => {
            if(state.findIndex((pro) => pro.id === action.payload.id) === -1) {
                state.push(action.payload);
            } else {
                return state.map(item => {
                    return item.id === action.payload.id ? { ...item, quantity: item.quantity }
                        : item;
                })
            }
        },

        removeFromCart: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            return state.filter((item) => item.id !== id);
        }
    }
});

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;