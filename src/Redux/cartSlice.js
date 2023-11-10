import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    products: [],
    isLoading: false,
    hasError: false
}

export const fetchAllProducts = createAsyncThunk('cart/fetchAllProducts', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20');
    return await res.json();
})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (store, {payload}) => {
            const findItem = store.items.find(item => item.id === payload.id)

            if(findItem){
                findItem.qty++;
            }else{
                store.items.push({...payload, qty: 1});
            }
        },
        removeFromCart: (store, {payload}) => {
                store.items = store.items.filter(item => item.id !== payload.id);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.pending, (store, action) => {
            store.isLoading = true;
            store.hasError = false;
        });
        builder.addCase(fetchAllProducts.fulfilled, (store, action) => {
            store.isLoading = false;
            store.products = action.payload;
        });
        builder.addCase(fetchAllProducts.rejected, (store, action) => {
            store.isLoading = false;
            store.hasError = true;
        });
    }
})

export default cartSlice.reducer;
export const {addToCart, removeFromCart} = cartSlice.actions;