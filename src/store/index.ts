import { configureStore } from '@reduxjs/toolkit';
import weatherForecastReducer from './weatherForecast/weatherForecastSlice';
import CityReducer from './city/citySlice';
import UnitSlice from './unit/unitSlice';

export const store = configureStore({
  reducer: {
    weatherForecast: weatherForecastReducer,
    city: CityReducer,
    unit: UnitSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
