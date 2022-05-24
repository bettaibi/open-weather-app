import { useState, useLayoutEffect, useRef } from 'react';
import { Box, Stack, FabButton } from '../../styled';
import { motion, AnimatePresence } from "framer-motion";
import useBreakpoint from '../../hooks/useBreakpoint';

const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100
};

let cardWidth = 200; // minWidth

const Carousel = ({ children }: { children: React.ReactNode }) => {
    const breakpoint = useBreakpoint();
    const isMobile = breakpoint === 'xs' || breakpoint === 'sm';
    const [leftBoundary, setLeftBoundary] = useState<number>(0);
    const [currentX, setCurrentX] = useState<number>(0);
    const wrapperRef = useRef<HTMLDivElement>(null);

    /** Compute Inner Carousel boundaries */
    useLayoutEffect(() => {
        if (wrapperRef.current) {
            const boundary = wrapperRef.current?.scrollWidth - wrapperRef.current?.offsetWidth;
            cardWidth = (wrapperRef.current!.querySelector('[data-id="today"]')?.getBoundingClientRect().width || cardWidth);
            setLeftBoundary(boundary);
        }
    }, [breakpoint, wrapperRef]);

    /** Centred "today's forecast" Card */
    useLayoutEffect(() => {
        
        if (!wrapperRef.current) return;

        /** Wrapper and Card X positions relative to the left corner position of the window */
        const targetCardPosition = wrapperRef.current?.querySelector('[data-id="today"]')!.getBoundingClientRect().left;
        const wrapperPosition = wrapperRef.current?.getBoundingClientRect().left;
        /** Compute diff, and skip one card in order to make today's forecast card centred */
        const diff = (targetCardPosition - wrapperPosition) - cardWidth;
        setCurrentX(-diff);

    }, []);

    async function next() {
        try {
            const newXValue = (currentX - cardWidth);
            if (Math.abs(newXValue) < leftBoundary) {
                setCurrentX(newXValue);
            }
            else {
                setCurrentX(-(leftBoundary + 16));
            }
        }
        catch (err) {
            console.error(err)
        }
    }

    async function pervious() {
        try {
            const newXValue = (currentX + cardWidth);
            if (newXValue < 0) {
                setCurrentX(newXValue);
            }
            else {
                setCurrentX(0);
            }
        }
        catch (err) {
            console.error(err)
        }
    }

    return (
        <Box px={isMobile ? 0 : 6} position="relative">
            {/* Carousel */}
            <Box as={motion.div} ref={wrapperRef} overflow="hidden" py={1} px={isMobile ? 0 : 1}
                style={{ cursor: 'grab' }}
                whileTap={{ cursor: 'grabbing' }}>

                <Stack as={motion.div} spacing={2}
                    style={{ x: currentX }}
                    drag="x"
                    dragConstraints={{ right: 0, left: -leftBoundary }}
                    transition={{ spring, duration: 0.5 }}
                    animate={{ x: currentX }}
                >

                    {children}
                </Stack>
            </Box>
            {/* Arrow Button (Buttons are hidden in mobile representation) */}
            {
                !isMobile && (
                    <>
                        <AnimatePresence>
                            { currentX < 0 &&
                                <Stack position="absolute" bottom="0" left="0" top="0" alignItems="center" width="fit-content">
                                    <FabButton as={motion.button} elevation={1} onClick={pervious}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                    >S</FabButton>
                                </Stack>
                            }
                        </AnimatePresence>


                        <AnimatePresence>
                            { -(currentX) < leftBoundary &&
                                <Stack position="absolute"  bottom="0" right="0" top="0" alignItems="center"
                                    width="fit-content">
                                    <FabButton as={motion.button} elevation={1} onClick={next}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                    >M</FabButton>
                                </Stack>
                            }
                        </AnimatePresence>

                    </>
                )
            }
        </Box>
    )
}

export default Carousel;