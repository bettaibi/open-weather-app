/**
 * Add asynchronous logic to redux using thunk
 */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { UnitProps } from '../../models/app.model';
import { config } from '../../services/config';
import axios from "axios";

const appid =  config.WEATHER_FORCAST_APPID;
const url = config.WEATHER_FORCAST_URL;

export const fetchWeatherForcast = createAsyncThunk('weatherForecast/fetchWeatherForcast',
 async ({city, unit}: {city: string, unit: UnitProps}, { rejectWithValue }) => {
    try {
        const res = await axios.get(url, { params: { q: city, units: unit, appid } });
        if(res.status === 200) return res.data;
    }
    catch (err) {
        // Handle Error
        if (axios.isAxiosError(err) && err.response) {
            console.log("******rejected with value*****")
            return rejectWithValue(err.response.data);
        } 
        else throw err;
    }
});