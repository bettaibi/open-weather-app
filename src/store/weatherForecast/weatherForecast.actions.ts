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
 async ({city, unit}: {city: string, unit: UnitProps}) => {
    try {
        const res = await axios.get(url, { params: { q: city, units: unit, appid } });
        return res.data;
    }
    catch (err) {
        return err;
    }
});