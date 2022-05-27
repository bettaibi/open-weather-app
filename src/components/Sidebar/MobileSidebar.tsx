/**
 * Swipeable Mobile Sidebar
 */
import { Box, Stack } from '../../styled';
import { motion, useMotionValue, useAnimation, PanInfo } from 'framer-motion';

type MotionEvent = MouseEvent | TouchEvent | PointerEvent;

const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100
};
const MobileSidebar = ({ children }: { children: React.ReactNode }) => {
    const width = window.innerWidth - 25;
    const x = useMotionValue(-width);
    const controls = useAnimation();

    function panHandler(e: any, pointInfo: PanInfo) {
        e.stopPropagation();
        let currentPosition: number = pointInfo.offset.x;
        let diff = pointInfo.offset.x;
        if ( currentPosition > 0) diff = -width + pointInfo.offset.x;

        if (diff < 0) {
            x.set(diff);
        }
        else{
            x.set(0);
            return;
        }
    }

    function panEndHandler(pointInfo: PanInfo) {
        const diff = -width + pointInfo.offset.x;

        if(diff >= -(width/2)){
            controls.start({
                x: 0
            });
        }
        else{
            controls.start({
                x: -width
            });
        }
    }

    return (
        <Stack as={motion.aside} height='100vh' position="fixed" top="0" 
            left="0" width="100%"  direction='row'
            style={{ x, zIndex: 9999999 }}
            transition={{ spring, duration: 0.5 }}
            animate={controls}
            >
            
             <Box height="100%" width="100%" bg="primary" 
                style={{overflowY: 'auto', minHeight:'100vh'}}>
                 {children}
             </Box>

              {/* (Swipe to open) */}
             <motion.div
                 onPan={(e:MotionEvent, pointInfo: PanInfo) => panHandler(e, pointInfo)}
                 onPanEnd={(e:MotionEvent, pointInfo: PanInfo) => panEndHandler(pointInfo)}
                 style={{touchAction: 'none', zIndex: 99999999,
                 display:'flex', alignItems: "center", width: "30px", height: "100%"}}
              >
                 {/* Indicator */}
                 <Box width="10px" bg="primary" height="180px" radius="0 1rem 1rem 0" />
             </motion.div>
        </Stack>
    )
}

export default MobileSidebar;