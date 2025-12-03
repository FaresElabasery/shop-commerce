import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface FavState {
  items: number[]; 
}

const initialState: FavState = {
  items: [],
};


const favSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFav: (state, action: PayloadAction<number>) => {
      if (state.items.includes(action.payload)) {
        state.items = state.items.filter(id => id !== action.payload)
      } else {
        state.items.push(action.payload)
      }
    },
  },
})

export const { toggleFav } = favSlice.actions
export default favSlice.reducer
