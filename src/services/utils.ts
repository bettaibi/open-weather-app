import { UnitProps, UNITS, WeatherForecastDayProps } from "../models/app.model";

export function isDay(): boolean {
    const hours = new Date().getHours();
    return hours >= 6 && hours < 20;
}

export function getDaysOfWeek(list: WeatherForecastDayProps[]): WeatherForecastDayProps[] {
    let weekDays: {[day: number]: WeatherForecastDayProps} = {};

    for(let item of list){
        let day = (new Date(item.dt_txt)).getDate();
        if(!(day in weekDays)){
            weekDays[day] = item;
        }
    }

    return Object.values(weekDays);
}
/** Parts of the day */
export function groubByDay(list: WeatherForecastDayProps[]){
    let days: {[day: number]: WeatherForecastDayProps[]} = {}
    
    for(let item of list){
        let day = (new Date(item.dt_txt)).getDate();
        if(!(day in days)) days[day] = [];
        days[day] = [...days[day], item];
    }

    return Object.values(days);
}

export function getColor(temp: number, unit: UnitProps): string{
    const base = unit === UNITS.FAHRENHEIT ? 1.8: 1;
    const extra = unit === UNITS.FAHRENHEIT ? 32: 0;

    const color = temp <= (26*base + extra)? '#22c55e'
    : (temp > (26*base + extra) && temp < (38*base + extra)) 
    ? '#f59e0b': '#ef4444' 

    return color;
}