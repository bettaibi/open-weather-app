/** 
 * SideBar Content (Today Highlights)
 **/
import React from 'react';
import { Typography } from '../../styled/Typography/Typography.styled';
import {
    Box,
    Stack,
    Paper
} from '../../styled';

import dayIcon from '../../assets/img/day.svg';
import nightIcon from '../../assets/img/night.svg';
import sunsetIcon from '../../assets/img/sunset.svg';
import sunriseIcon from '../../assets/img/sunrise.svg';
import Moment from 'react-moment';

import { WiHumidity } from 'react-icons/wi';
import { isDay as checkTime } from '../../services/utils';
import { WeatherForecastPayload } from '../../models/app.model';
import { TiWeatherCloudy, TiWeatherWindyCloudy } from 'react-icons/ti';

const TodayHighlight: React.FC<WeatherForecastPayload> = ({ city, list }) => {
    const isDay: boolean = checkTime();
    const today = new Date();

    return (
        <Stack direction="column" justifyContent="space-between" p={3} height="100%">
            <Box width="100%">
                <Stack alignItems="flex-start" justifyContent="space-between" spacing={2}>
                    <Box>
                        <Typography color="light" as="h2" fontWeight={500} mb={.3}> Today </Typography>
                        <Typography color="light" as="span" size=".95rem">
                            <Moment format="dd, D/MM">{today}</Moment>
                        </Typography>
                    </Box>
                    <Box as="img" src={isDay ? dayIcon : nightIcon} alt="time" />
                </Stack>

                <Stack direction="column" alignItems="center" justifyContent="space-between" >
                    <Typography color="light" size="3.8rem" fontWeight={500}>
                        {Math.round(list?.[0].main.temp)}<sup>°</sup>
                    </Typography>

                    <Typography as="h4" color="secondary" mb={1}>{city?.name}</Typography>
                    <Typography as="small" color="secondary" fontWeight={600}>
                        {list?.[0].main.temp_min.toFixed(1)}<sup>°</sup>/{list?.[0].main.temp_max.toFixed(1)}<sup>°</sup>
                        Feels like {list?.[0].main.feels_like.toFixed(1)}<sup>°</sup>
                    </Typography>
                </Stack>

                <Stack alignItems="center" justifyContent="space-between" spacing={2} mt={4}>
                    <Stack spacing={1} alignItems="center">
                        <WiHumidity size="24px" color="#3b82f6" />
                        <Typography color= "light" as="span">{list?.[0].main.humidity} %</Typography>
                    </Stack>
                    <Stack spacing={1} alignItems="center">
                        <TiWeatherWindyCloudy size="24px" color="#3b82f6" />
                        <Typography color= "light" as="span">{list?.[0].wind.speed} </Typography>
                    </Stack>
                    <Stack spacing={1} alignItems="center">
                        <TiWeatherCloudy size="24px" color="#3b82f6" />
                        <Typography color= "light" as="span">{list?.[0]?.clouds.all}</Typography>
                    </Stack>
                </Stack>
            </Box>

            <Paper elevation={2} bg="#212c46" radius="1rem" pt={1.5} px={1} my={2} width="100%">
                <Stack alignItems="center" justifyContent="space-around">
                    <Stack direction="column" alignItems="center">
                        <Typography color="light" mb={.5}>Sunrise</Typography>
                        <Typography color="light" mb={1}>
                            <Moment format="hh:mm a" unix>{city.sunrise}</Moment>
                        </Typography>
                        <Box as="img" src={sunriseIcon} alt="Sunrise" />
                    </Stack>

                    <Stack direction="column" alignItems="center">
                        <Typography color="light" mb={.5}>Sunset</Typography>
                        <Typography color="light" mb={1}>
                            <Moment format="hh:mm a" unix>{city.sunset}</Moment>
                        </Typography>
                        <Box as="img" src={sunsetIcon} alt="Sunrise" />
                    </Stack>
                </Stack>
            </Paper>
        </Stack>
    )
}

export default TodayHighlight