import React, {useId, useMemo} from 'react';
import {
  Box,
  Main,
  Stack,
  Paper
} from '../../styled';
import Search from '../../components/Search';
import Carousel from '../../components/Carousel';
import DayHighlight from './DayHighlight';
import Units from '../../components/Units';
import { HomeProps } from '../../models/app.model';
import { getDaysOfWeek } from '../../services/utils';
import DaysOverview from './DaysOverview';

const Home: React.FC<HomeProps> = ({text, unit, list, city}) => {
  const id = useId();

  const weekDays = useMemo(()=> {
    return getDaysOfWeek(list);
    
  }, [city?.name, unit]);

  return (
    <Main>
      {/* Header */}
      <Box as="header" bg="#fff" className="spacing px" py={3} height="128px"
        borderBottom="1px solid rgba(0,0,0,.12)">

        <Stack spacing={2}>
          <Search text = {text} />
          <Units unit = {unit} />
        </Stack>
      </Box>

      <Box className="spacing mx px" bg="body" py={1} width="fit-content"
        radius="1rem 1rem 0 0" position="relative" top="-36px"
        border="1px solid rgba(0,0,0,.12)" borderBottom="0">
        Forecast for {city?.name}
      </Box>

      {/* Carousel */}
      <Box className="spacing px" mb={2}>
        <Carousel>
            {
              weekDays.map((item, index)=> (
                <DayHighlight index={index} key={id+index} day = {item} unit={unit} />
              ))
            }
        </Carousel>
      </Box>

      {/* Chart */}
      <Box className="spacing px" mb={2}>
        <Paper elevation={1} bg="light" radius="1rem">
          <DaysOverview weekDays = {weekDays} list = {list} />
        </Paper>
      </Box>
    </Main>
  )
}

export default Home;