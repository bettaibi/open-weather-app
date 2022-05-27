import React, { useId } from 'react';
import ExpandedPanel from '../../../components/ExpandedPanel/ExpandedPanel';
import useToggle from '../../../hooks/useToggle';
import { WeatherForecastDayProps } from '../../../models/app.model';
import { Box, Button, Stack } from '../../../styled';
import Moment from 'react-moment';
import { Typography } from '../../../styled/Typography/Typography.styled';
import {
    TiWeatherPartlySunny,
    TiWeatherCloudy,
    TiWeatherShower,
    TiWeatherWindyCloudy,
} from 'react-icons/ti';
import {
    FaAngleDown,
    FaAngleUp,
    FaTemperatureLow,
    FaMixcloud
} from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi';

const PartsOfDay = ({ times, isOpen }: { times: WeatherForecastDayProps[], isOpen: boolean }) => {

    const id = useId();

    return (
        <>
            {
                times.map((detail: WeatherForecastDayProps, index: number) => (
                    <TimeDetails detail={detail} key={id + index} isOpen = {isOpen} currentIndex = {index} />
                ))
            }
        </>
    )
}

const TimeDetails = ({ detail, isOpen, currentIndex }: { detail: WeatherForecastDayProps, isOpen: boolean, currentIndex: number }) => {
    const { show, handleToggle } = useToggle(isOpen && (currentIndex===0)); // first Panel is shown by default

    const getWeatherIcon = (state: string) => {
        switch (state) {
            case 'Clouds': return (<TiWeatherPartlySunny size="24px" color='orange' />);
            case 'Clear': return (<TiWeatherCloudy size="24px" color='#64748B' />);
            case 'Rain': return (<TiWeatherShower size="24px" color='#3b82f6' />);
            default: return (<TiWeatherWindyCloudy size="24px" color='#f5ccee' />)
        }
    }

    return (
        <ExpandedPanel
            show={show}
            content={
                <Stack py={1} px={2} alignItems="center" justifyContent="space-between" spacing={1}
                    borderBottom="1px solid rgba(0,0,0,.12)"
                    onClick={handleToggle}>
                    <Typography as="span" color="secondary" style={{ textTransform: 'uppercase' }}>
                        <Moment format="hh:mm a" trim={false}>{detail?.dt_txt}</Moment>
                    </Typography>
                    <Typography as='span' size="1rem" fontWeight={500} >
                        {Math.round(detail?.main.temp)}<sup>°</sup>
                    </Typography>

                    {getWeatherIcon(detail?.weather[0].main)}

                    <Typography>
                        <WiHumidity color="#64748B" /> &nbsp;
                        {detail?.main.humidity >9? detail.main.humidity: '0'+detail.main.humidity} %
                    </Typography>

                    {
                        show ? <Button bg="transparent"><FaAngleUp /></Button>
                            : <Button bg="transparent"><FaAngleDown /></Button>
                    }
                </Stack>
            }
            panel={
                <Box p={2}>
                    <Typography color="secondary" fontWeight={500} mb={1}>
                        {detail.weather[0].description}
                    </Typography>

                    <Box border="1px solid rgba(0,0,0, .12)" radius="8px" p={2}>
                        <Stack alignItems="flex-start" justifyContent='space-between' mt={1} spacing={2}>
                         
                            <Stack alignItems="center" justifyContent='center'>
                                <FaTemperatureLow size="18px" color="#3b82f6" />
                                <Box ml={1}>
                                    <Typography as="span" color="secondary">Feels Like</Typography>
                                    <Typography fontWeight={500}>
                                        {detail.main.feels_like.toFixed(1)}
                                        <sup>°</sup>
                                    </Typography>
                                </Box>
                            </Stack>

                            <Stack  alignItems="center" justifyContent='center'>
                                <WiHumidity size="18px" color="#3b82f6" />
                                <Box ml={1}>
                                    <Typography as="span" color="secondary">Humidity</Typography>
                                    <Typography fontWeight={500}>
                                        {detail.main.humidity} %
                                    </Typography>
                                </Box>
                            </Stack>

                        </Stack>

                        <Stack alignItems="flex-start" justifyContent='space-between' mt={1} spacing={2}>
                        <Stack  alignItems="center" justifyContent='center'>
                                <TiWeatherWindyCloudy size="18px" color="#3b82f6" />
                                <Box ml={1}>
                                    <Typography as="span" color="secondary">Wind</Typography>
                                    <Typography fontWeight={500}>
                                       SSE {detail.wind.speed} Km/h
                                    </Typography>
                                </Box>
                            </Stack>

                            <Stack  alignItems="center" justifyContent='center'>
                                <FaMixcloud color="#3b82f6" size="18px" />
                                <Box ml={1}>
                                    <Typography as="span" color="secondary">Pressure</Typography>
                                    <Typography fontWeight={500}>
                                         {detail.main.pressure}
                                    </Typography>
                                </Box>
                            </Stack>

                        </Stack>

                    </Box>
                </Box>
            }
        />
    )
}

export default PartsOfDay;