import React from 'react';
import { Box, Button } from '../../styled';
import { Typography } from '../../styled/Typography/Typography.styled';

const ErrorFallback = ({ errorMessage }: { errorMessage?: string }) => {

    function handleClick(){
        window.location.reload();
    }

    return (
        <Box p={4}>
            <Typography as="h1">Oops, Something went wrong :(</Typography>

            <Typography as="p">
                {errorMessage || ''}
            </Typography>
            <Button color="primary" onClick={handleClick}>Reload</Button>
        </Box>
    )
}

export default ErrorFallback;