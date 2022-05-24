import React from 'react';
import {
  Box,
  Main,
  Stack,
  Paper
} from '../../styled';
import Search from '../../components/Search';
import Carousel from '../../components/Carousel';
import DayHighlight from './DayHighlight';
import { HomeProps } from '../../models/app.model';
import Units from '../../components/Units';

const Home: React.FC<HomeProps> = ({text, setText, unit, setUnit}) => {

  return (
    <Main>
      {/* Header */}
      <Box as="header" bg="#fff" className="spacing px" py={3} height="128px"
        borderBottom="1px solid rgba(0,0,0,.12)">

        <Stack spacing={2}>
          <Search text = {text} setText = {setText} />
          <Units unit = {unit} setUnit = {setUnit} />
        </Stack>
      </Box>

      <Box className="spacing mx px" bg="body" py={1} width="fit-content"
        radius="1rem 1rem 0 0" position="relative" top="-36px"
        border="1px solid rgba(0,0,0,.12)" borderBottom="0">
        Forecast for {(text || 'Tunis')}
      </Box>

      {/* Carousel */}
      <Box className="spacing px" mb={2}>
        <Carousel>
            {
              [1,2,3,4,5].map((item, index)=> (
                <DayHighlight index={index} key={'e'+index} />
              ))
            }
        </Carousel>
      </Box>

      {/* Chart */}
      <Box className="spacing px">
        <Paper elevation={1} p={2} bg="#fff" radius="1rem">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ducimus a laborum nemo beatae error, quasi qui nostrum sed, repellendus aspernatur delectus! Minima dolorem nesciunt velit? Similique modi vitae architecto.
        </Paper>
      </Box>
    </Main>
  )
}

export default Home;