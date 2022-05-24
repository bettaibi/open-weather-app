
export const config = {

    WEATHER_FORCAST_APPID: process.env.REACT_APP_WEATHER_FORECAST_APPID || '',
    WEATHER_FORCAST_URL: process.env.REACT_APP_WEATHER_FORCAST_URL || ''
} as const;