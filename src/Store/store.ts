import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import favReducer from './favSlice'
import authReducer from './authSlice'

// import productsSlice from './productsSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        favorites: favReducer,
        // products: productsSlice,
        auth: authReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch