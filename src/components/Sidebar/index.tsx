import React from 'react';
import { Box } from '../../styled';

const Sidebar = ({children}: {children: React.ReactNode}) => {

    return (
        <Box as="aside" bg="primary" height='100vh' position="sticky" top="0"
         flex="0 0 300px">
            {children}
        </Box>
    )
}

export default Sidebar;