import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], 
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrderItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeOrderItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateOrderItem: (state, action) => {
            const { id, count } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                existingItem.count = count;
            }
        },
        clearOrder: (state) => {
            state.items = [];
        },
    },
});

export const { addOrderItem, removeOrderItem, updateOrderItem, clearOrder } = orderSlice.actions;

export default orderSlice.reducer;
