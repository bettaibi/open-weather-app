import { createSlice, PayloadAction, createSelector  } from '@reduxjs/toolkit';
import type { RootState } from './..';
import { 
    STATUS, 
    WeatherForecastPayload,
    WeatherForecastState
} from '../../models/app.model';

import { fetchWeatherForcast } from './weatherForecast.actions';

const initialState: WeatherForecastState = {
    entities : {},
    status: STATUS.IDLE
}

export const weatherForecastSlice = createSlice({
    name: 'weatherForecast',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
        .addCase(fetchWeatherForcast.pending, (state: WeatherForecastState)=> {
            state.status = STATUS.LOADING;
        })
        .addCase(fetchWeatherForcast.fulfilled, (state: WeatherForecastState, action: PayloadAction<WeatherForecastPayload, string, any>) => {
            const id = action.meta.arg.city + action.meta.arg.unit;
            const {city, list} = action.payload;
            state.entities[id] = {city, list};
            state.status = STATUS.SUCCEEDED;
        })
        .addCase(fetchWeatherForcast.rejected, (state: WeatherForecastState, action) => {
            state.status = STATUS.FAILED
            state.error = action.error.message;
        })
    }
});

// Selectors
export const selectStatus = (state: RootState) => state.weatherForecast.status;
const selectEntities = (State: RootState) => State.weatherForecast.entities;
/**
 * Reselect, creating memoized selector for better performance.
 */
export const selectForecastFor = createSelector(
    [selectEntities, (State, entityId: string) => entityId],

    (entities, entityId) => entities[entityId]
)

export default weatherForecastSlice.reducer;