import React from 'react';
import { Box, Button } from '../../styled';
import { Typography } from '../../styled/Typography/Typography.styled';

const ErrorFallback = ({ errorMessage }: { errorMessage?: string }) => {

    function handleClick(){
        window.location.reload();
    }

    return (
        <Box p={6}>
            <Typography as="h1">Oops, Something went wrong :(</Typography>

            <Typography as="p" my={2}>
                {errorMessage || "It seems that city not found"}
            </Typography>
            <Button color="#fff" bg="primary" onClick={handleClick}>Reload</Button>
        </Box>
    )
}

export default ErrorFallback;