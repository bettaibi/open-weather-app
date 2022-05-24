import {useEffect} from 'react';

// App State
import { STATUS } from './models/app.model';
import { selectStatus, selectForecastFor } from './store/weatherForecast/weatherForecastSlice';
import { selectUnit } from './store/unit/unitSlice';
import { selectCity } from './store/city/citySlice';
import { fetchWeatherForcast } from './store/weatherForecast/weatherForecast.actions';
import { useAppSelector, useAppDispatch } from './store/hooks';
// components
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Stack from './styled/Stack/Stack.styled';

function App() {
  const dispatch = useAppDispatch();

  const city = useAppSelector(selectCity);
  const unit = useAppSelector(selectUnit);
  const status = useAppSelector(selectStatus);
  // const weatherForecast = useAppSelector(state => selectForecastFor(state, city+unit));
  
  // console.log(weatherForecast)


  useEffect(()=> {

    if(status === STATUS.IDLE){
      // dispatch(fetchWeatherForcast({city: city || 'tunis', unit}));
    }

  }, [city, unit]);

  if(status === STATUS.LOADING){
    return (
      <span>LOADING ....</span>
    )
  }

  if(status === STATUS.FAILED){
    return <span>Fallback ui</span>
  }

  return (
    <Stack>
      {/* SIDEBAR */}
      <Sidebar>
        Some Content here
      </Sidebar>

      {/* MAIN PAGE */}
      <Home 
        text={city} 
        unit = {unit}
      />

    </Stack>
  );
}

export default App;
