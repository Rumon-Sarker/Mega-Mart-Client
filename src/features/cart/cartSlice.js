import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
};

const carSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            }
            else {
                state.items.push({ ...action.payload, quantity: action.payload.quantity })
            }
            state.totalQuantity += action.payload.quantity;
            state.totalPrice += action.payload.price * action.payload.quantity;
        },
        removeItem(state, action) {
            const itemsToRemove = state.items.find(item => item.id === action.payload);
            if (itemsToRemove) {
                state.totalQuantity -= itemsToRemove.quantity;
                state.totalPrice -= itemsToRemove.price * itemsToRemove.quantity;
                state.items = state.items.filter(item => item.id !== action.payload)
            }
        },
        incrementQuantity(state, action) {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.quantity++;
                state.totalQuantity++;
                state.totalPrice += item.price;
            }
        },
        decrementQuantity(state, action) {
            const item = state.items.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity--;
                state.totalQuantity--;
                state.totalPrice -= item.price;
            }
        },
        clearCart(state) {
            state.items = [];
            state.totalPrice = 0;
            state.totalQuantity = 0;
        }

    }
});
export const {
    addToCart,
    removeItem,
    clearCart,
    incrementQuantity,
    decrementQuantity } = carSlice.actions;
export default carSlice.reducer;