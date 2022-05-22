import React from 'react';
import { Box } from '../../styled';

const Sidebar = ({children}: {children: React.ReactNode}) => {

    return (
        <Box as="aside" flex="0 0 300px" bg="primary" height='100vh'>
            {children}
        </Box>
    )
}

export default Sidebar;