import {useEffect, useState} from 'react';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Stack from './styled/Stack/Stack.styled';
import axios from "axios";
import { config } from './services/config';
import { UNITS, UnitProps } from './models/app.model';

const url = "https://api.openweathermap.org/data/2.5/forecast";

function App() {
  const [city, setCity] = useState<string>('');
  const [unit, setUnit] = useState<UnitProps>(UNITS.CELSIUS);

  useEffect(()=> {

    // fetchWeatherForcast(city || 'tunis', unit);
  }, [city, unit]);

  const fetchWeatherForcast = async (city: string, unit: UnitProps) => {
    try{
      const res = await axios.get(url, { params: { q: city, units: unit, appid: config.WEATHER_FORCAST_APPID } });
      if(res.status === 200){

        console.log(res.data)
      }
    }
    catch(err){
      throw err;
    }
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
        setText = {setCity} 
        unit = {unit}
        setUnit = {setUnit}
      />

    </Stack>
  );
}

export default App;
