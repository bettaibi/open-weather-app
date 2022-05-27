import {useEffect} from 'react';

// App State
import { STATUS, WeatherForecastPayload } from './models/app.model';
import { selectStatus, selectForecastFor } from './store/weatherForecast/weatherForecastSlice';
import { selectUnit } from './store/unit/unitSlice';
import { selectCity } from './store/city/citySlice';
import { fetchWeatherForcast } from './store/weatherForecast/weatherForecast.actions';
import { useAppSelector, useAppDispatch } from './store/hooks';
// components
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Stack from './styled/Stack/Stack.styled';
import TodayHighlight from './pages/TodayHighlight';
import Loading from './components/Loading';
import Fallback from './components/Fallback/ErrorFallback';

function App() {
  const dispatch = useAppDispatch();

  const city = useAppSelector(selectCity);
  const unit = useAppSelector(selectUnit);
  const weatherForecast = useAppSelector<WeatherForecastPayload>(state => selectForecastFor(state, city+unit));
  const status = useAppSelector(selectStatus);
  

  useEffect(()=> {

    async function fetchWeather() {
      try{
         await dispatch(fetchWeatherForcast({city, unit})).unwrap();
      }
      catch(err: any){
        /**
         * Handle Error, When typing a wrong value as a city.
         *  It is supposed to be a snackbar component instead of a simple alert :)
        */
        alert(`Oops, something went wrong, ${err.message}. Would you like to reload?`)
        window.location.reload();
      }
    }

    if(!weatherForecast){
      fetchWeather();
    }

  }, [city, unit]);

  if(status === STATUS.LOADING || status === STATUS.IDLE || !weatherForecast){
    return (
      <Loading />
    )
  }
 
  if(status === STATUS.FAILED){
    return <Fallback />
  }

  return (
    <Stack>
      {/* SIDEBAR */}
      <Sidebar>
        <TodayHighlight city={weatherForecast.city} list={weatherForecast.list} />
      </Sidebar>

      {/* MAIN PAGE */}
     <Home
        text={city} 
        unit = {unit}
        city={weatherForecast.city} 
        list={weatherForecast.list}
      />
    </Stack>
  );
}

export default App;
