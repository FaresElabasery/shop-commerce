import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type CartItem = {
    id: number
    name: string
    price: number
    quantity: number
}

interface CartState {
    items: CartItem[]
}

const initialState: CartState = {
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existing = state.items.find(i => i.id === action.payload.id)
            if (existing) {
                existing.quantity += action.payload.quantity
            } else {
                state.items.push(action.payload)
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        clearCart: (state) => {
            state.items = []
        },
        increaseCart : (state, action: PayloadAction<number>) => {
            const existing = state.items.find(i => i.id === action.payload)
            if (existing) {
                existing.quantity += 1
            }
        },
        decreaseCart : (state, action: PayloadAction<number>) => {
            const existing = state.items.find(i => i.id === action.payload)
            if (existing && existing.quantity > 1) {
                existing.quantity -= 1
            }
        },
    },
})

export const { addToCart, removeFromCart, clearCart, increaseCart, decreaseCart } = cartSlice.actions
export default cartSlice.reducer
