'use client'

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const levelSlice = createSlice({
    name: 'level',
    initialState: { level: 1 as number },
    reducers: {
      setLevel: (state, action: PayloadAction<number>) => {
        state.level = action.payload;
      }
    }
  });
  
  export const { setLevel } = levelSlice.actions;
  
  export default levelSlice.reducer;