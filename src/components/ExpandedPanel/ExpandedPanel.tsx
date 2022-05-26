import React, { useMemo, useRef} from 'react';
import { Box } from '../../styled';

interface ExpandedPanelProps{
   show: boolean;
   content: React.ReactNode;
   panel: React.ReactNode;
}
const ExpandedPanel: React.FC<ExpandedPanelProps> = ({show, content, panel}) => {
    const panelRef = useRef<HTMLDivElement>(null);

    const computedStyle = useMemo(()=> {
        return {
            height: show? (panelRef.current?.scrollHeight) : 0,
            transition: '0.2s',
            overflow: 'hidden'
        }
    }, [show]);

    return (
        <Box>
            {content}

            <Box style={computedStyle} aria-hidden={show} ref={panelRef}>
                {panel}
            </Box>
        </Box>
    );
};

export default React.memo(ExpandedPanel);