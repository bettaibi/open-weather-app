import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '..';
import { UnitProps, UNITS } from '../../models/app.model';

const initialState = UNITS.CELSIUS;

export const unitSlice = createSlice({
    name: 'unit',
    initialState,
    reducers: {
      updateUnit: (state, action: PayloadAction<UnitProps>) => {
        return action.payload;
      },
    }
});

export const { updateUnit } = unitSlice.actions;

export const selectUnit = (state: RootState) => state.unit;

export default unitSlice.reducer;