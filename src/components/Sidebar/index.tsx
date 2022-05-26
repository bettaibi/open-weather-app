import React from 'react';
import useBreakpoint from '../../hooks/useBreakpoint';
import { Breakpoints } from '../../models/app.model';
import { Box } from '../../styled';
import MobileSidebar from './MobileSidebar';

const Sidebar = ({ children }: { children: React.ReactNode }) => {
    const breakpoint: Breakpoints = useBreakpoint();
    const isMobile = breakpoint === 'xs' || breakpoint === 'sm';

    if (isMobile) {
        return (<MobileSidebar>{children}</MobileSidebar>);
    }

    return (
        <Box as="aside" bg="primary" height='100vh' position="sticky" top="0"
            flex="0 0 300px">
            {children}
        </Box>
    )
}

export default Sidebar;