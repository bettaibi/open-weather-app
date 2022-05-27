import React, { useId } from 'react';
import { HomeProps, WeatherForecastDayProps } from '../../../models/app.model';
import { groubByDay } from '../../../services/utils';
import {
    Box,
} from '../../../styled';
import { Typography } from '../../../styled/Typography/Typography.styled';
import PartsOfDay from '../PartsOfDay';
import OverviewChart from './OverviewChart';
import Moment from 'react-moment';

type OverviewProps = Pick<HomeProps, 'weekDays' | 'list'>;

const DaysOverview: React.FC<OverviewProps> = ({ weekDays, list }) => {
    const groupedList = groubByDay(list);
    const id = useId();
 
    return (
        <React.Fragment>
            <Typography size="1.2rem" fontWeight={500} p={2} mb={2}>
               Weather forecast Overview
            </Typography>

            <OverviewChart weekDays = {weekDays} />

            <Typography color="secondary" size="1rem" fontWeight={500} p={2} mb={2}>
               Overview (with 3-hour step)
            </Typography>
            
            {
                groupedList.map((day: WeatherForecastDayProps[], index: number) => (
                    <React.Fragment key={id+index}>
                       
                        <Box py={1} px={2} bg="body"
                            borderBottom="1px solid rgba(0,0,0,.12)" 
                            borderTop="1px solid rgba(0,0,0,.12)">
                            <Typography fontWeight={500}>
                                <Moment format="dd, D-MM" >{day[index]?.dt_txt}</Moment>
                            </Typography>
                        </Box>

                        <PartsOfDay times = {day} isOpen = {index === 0} />
                    </React.Fragment>
                ))
            }
        </React.Fragment>
    )
}

export default DaysOverview;