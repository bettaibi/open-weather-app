import { createSlice, PayloadAction, createSelector  } from '@reduxjs/toolkit';
import type { RootState } from './..';
import { 
    STATUS, 
    WeatherForecastPayload,
    WeatherForecastState
} from '../../models/app.model';

import { fetchWeatherForcast } from './weatherForecast.actions';

interface PayloadModel{
    data: WeatherForecastPayload;
    id: string;
}

const initialState: WeatherForecastState = {
    entities : {},
    status: STATUS.LOADING
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
        .addCase(fetchWeatherForcast.fulfilled, (state: WeatherForecastState, action: PayloadAction<PayloadModel | undefined>) => {
            
            if(action.payload){
                const id = action.payload.id;
                const {city, list} = action.payload.data;
                state.entities[id] = {city, list};
                state.status = STATUS.SUCCEEDED;
            }
        })
        .addCase(fetchWeatherForcast.rejected, (state: WeatherForecastState, action) => {
            state.status = STATUS.FAILED;
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