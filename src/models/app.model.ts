/**
 * Redux AppState
 */

export enum UNITS {
    CELSIUS = 'metric',
    FAHRENHEIT = 'imperial'
};

export enum STATUS {
    IDLE = 'idle',
    LOADING = 'loading',
    SUCCEEDED = 'succeeded',
    FAILED = 'failed'
}

export type StatusProps = STATUS.IDLE | STATUS.LOADING | STATUS.SUCCEEDED | STATUS.FAILED;
export type UnitProps = UNITS.CELSIUS | UNITS.FAHRENHEIT;

export interface WeatherForecastDayProps {
    dt: number;
    dt_txt: string;
    clouds: {all: number};
    main: {
        feels_like: number;
        grnd_level: number;
        humidity: number;
        pressure: number;
        sea_level: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    },
    wind: {
        deg: number;
        gust: number;
        speed: number;
    },
    weather: [{
        description: string;
        icon: string;
        main: string;
    }]
}
export interface WeatherForecastCityProps {
    name: string;
    sunrise: number;
    sunset: number;
}
export type WeatherForecastPayload = {
    city: WeatherForecastCityProps;
    list: WeatherForecastDayProps[];
}

/* Normalized Response */
export interface NormalizedEntities {
    [id: string]: any;
}

export interface WeatherForecastState {
    entities: NormalizedEntities;
    status: StatusProps;
    error?: string;
}


/** Common Types **/
export interface HomeProps{
    text: string,
    unit: UnitProps;
    list: WeatherForecastDayProps[];
    city: WeatherForecastCityProps;
    weekDays?: WeatherForecastDayProps[];
}

export type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | '';