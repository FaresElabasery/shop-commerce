// import type { IProduct } from "@/Interfaces/Products";
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// interface ProductsState {
//     items: IProduct[];
//     loading: boolean;
// }

// const initialState: ProductsState = {
//     items: [],
//     loading: false,
// };

// export const fetchProducts = createAsyncThunk("products/fetch", async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await res.json();
//     return data as IProduct[];
// });

// const productsSlice = createSlice({
//     name: "products",
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchProducts.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(fetchProducts.fulfilled, (state, action) => {
//                 state.items = action.payload;
//                 state.loading = false;
//             });
//     },
// });

// export default productsSlice.reducer;
