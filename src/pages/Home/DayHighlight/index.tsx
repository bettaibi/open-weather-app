import React from 'react';
import { Paper } from '../../../styled';

const DayHighlight = ({ index }: { index: number }) => {
    
    return (
        <Paper
            data-id={index === 3 ? 'today' : index}
            elevation={1} p={2} bg="#fff" radius="1rem"
            flex='1 0 auto' width={'33.33%'} style={{ minWidth: '200px' }}
            className={index === 3 ? 'active' : ''}
        >
            <h1>Card {index}</h1>
        </Paper>
    )
}

export default DayHighlight;