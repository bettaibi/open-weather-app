import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '..';

const initialState: string = 'tunis';

export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
      updateCity: (state, action: PayloadAction<string>) => {
        return action.payload;
      },
    }
});

export const { updateCity } = citySlice.actions;

// CRAETER A CITY SELECTOR

export const selectCity = (state: RootState) => state.city;

export default citySlice.reducer;