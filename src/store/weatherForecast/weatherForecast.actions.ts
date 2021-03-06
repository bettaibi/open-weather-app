/**
 * Add asynchronous logic to redux using thunk
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { UnitProps, WeatherForecastPayload } from '../../models/app.model';
import { config } from '../../services/config';
import axios from "axios";

const appid =  config.WEATHER_FORCAST_APPID;
const url = config.WEATHER_FORCAST_URL;

export const fetchWeatherForcast = createAsyncThunk('weatherForecast/fetchWeatherForcast',
 async ({city, unit}: {city: string, unit: UnitProps}, { rejectWithValue }) => {
    try {
        const res = await axios.get(url, { params: { q: city, units: unit, appid } });
        if(res.status === 200) return {data: {...res.data} as WeatherForecastPayload, id:city+unit};
    }
    catch (err) {
        // Handle Error
        if (axios.isAxiosError(err) && err.response) {
            return rejectWithValue(err.response.data);
        } 
        else throw err;
    }
});