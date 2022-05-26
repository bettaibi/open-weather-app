import React from 'react';
import useBreakpoint from '../../hooks/useBreakpoint';
import { Breakpoints } from '../../models/app.model';

const Hidden = ({children, hiddenFor}: {children: React.ReactNode, hiddenFor: Breakpoints[]}) => {
  const breakpoint: Breakpoints = useBreakpoint();

  if(hiddenFor.includes(breakpoint)) return null;

  return (
    <React.Fragment>
        {children}
    </React.Fragment>
  )
};

export default Hidden;