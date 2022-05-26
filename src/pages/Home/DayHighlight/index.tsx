import React from 'react';
import { UnitProps, WeatherForecastDayProps } from '../../../models/app.model';
import { Paper, Stack, Box } from '../../../styled';
import { Typography } from '../../../styled/Typography/Typography.styled';
import Moment from 'react-moment';
import { getColor } from '../../../services/utils';

interface DayHighlightProps {
    index: number;
    day: WeatherForecastDayProps;
    unit: UnitProps;
}
const DayHighlight: React.FC<DayHighlightProps> = ({ index, day, unit }) => {
    const color = getColor(Math.round(day.main.temp), unit);
    const isToday = (new Date().getDate()) === (new Date(day?.dt_txt).getDate());

    return (
        <Paper
            data-id={isToday ? 'today' : index}
            elevation={1} p={2} bg="light" radius="1rem"
            flex='1 0 auto' width={'33.33%'} style={{ minWidth: '200px' }}
            className={isToday ? 'active' : ''}>

            <Stack alignItems='flex-start' justifyContent='space-between'>
                <Typography fontWeight={500}>
                    <Moment format="dd, D/MM">{day?.dt_txt}</Moment>
                </Typography>

                <Box as="img" src={'http://openweathermap.org/img/w/' + day?.weather[0].icon + '.png'}
                 position="relative" right="-1rem" top="-1rem" />
            </Stack>

            <Stack direction="column" alignItems='center'>
                <Box mb={2} textAlign="center">
                    <Typography size="2.5rem" fontWeight={500} color={color}>
                        {Math.round(day.main.temp)}<sup>°</sup>
                    </Typography>
                    <Typography color={color}>
                        {day.weather?.[0].description}
                    </Typography>
                </Box>


                <Typography color="secondary" as="span" fontWeight={500}>
                    {day.main.temp_min.toFixed(1)}<sup>°</sup> / {day.main.temp_max.toFixed(1)}<sup>°</sup>
                </Typography>
            </Stack>

        </Paper>
    )
}

export default DayHighlight;