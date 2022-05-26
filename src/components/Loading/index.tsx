import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { TiWeatherCloudy } from 'react-icons/ti';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Stack, Box, Main, Paper } from '../../styled';
import Hidden from '../Hidden';

const Loading = () => {

    return (
        <Stack>
            <Hidden hiddenFor={['xs', 'sm']}>
                <Box className="spacing px" width="300px" bg="primary"
                    height="100vh" position="sticky" top="0">

                    <SkeletonTheme baseColor="#2c3344" highlightColor="#57595e">
                        <Stack direction="column" justifyContent='space-between' height='100%' py={2} >
                            <Box height="100%">
                                <Stack alignItems="center" justifyContent='space-between'>
                                    <Skeleton width="100px" height="25px" />
                                    <Skeleton
                                        circle
                                        height="45px"
                                        width="45px"
                                        borderRadius="50%"
                                    />
                                </Stack>
                                <Stack direction="column" alignItems="center" justifyContent='space-between' mt={7}>
                                    <Skeleton
                                        circle
                                        height="60px"
                                        width="60px"
                                        borderRadius="50%"
                                    />
                                    <p>
                                        <Skeleton width="200px" height="18px" /> <br />
                                        <Skeleton width="200px" height="10px" />
                                        <Skeleton width="160px" height="10px" />
                                    </p>
                                </Stack>
                            </Box>
                            <Box width="100%">
                             <Skeleton width="100%" height="100px" borderRadius="1rem" />
                            </Box>
                        </Stack>



                    </SkeletonTheme>
                </Box>
            </Hidden>

            <Main>
                <Box as="header" bg="#fff" className="spacing px" py={3} height="128px"
                    borderBottom="1px solid rgba(0,0,0,.12)">
                    {/* HEADER */}
                    <Stack spacing={2} justifyContent="space-between" alignItems="center">

                        <Box width="100%" border="1px solid rgba(0,0,0,.12)"
                            radius="24px" height="40px" />

                        <Stack spacing={1}>
                            <Skeleton
                                circle
                                height="45px"
                                width="45px"
                                borderRadius="50%"
                            />
                            <Skeleton
                                circle
                                height="45px"
                                width="45px"
                                borderRadius="50%"
                            />
                        </Stack>
                    </Stack>
                </Box>

                <Box className="spacing mx px" bg="body" py={1} width="fit-content"
                    radius="1rem 1rem 0 0" position="relative" top="-36px"
                    border="1px solid rgba(0,0,0,.12)" borderBottom="0">
                    <Skeleton width="180px" />
                </Box>

                {/* CARDS */}
                <Stack className="spacing px" alignItems="center">
                    <Skeleton
                        circle
                        height="45px"
                        width="45px"
                        borderRadius="50%"
                    />
                    <Stack direction="row" spacing={2} overflow="hidden" px={1}>
                        {
                            [1, 2, 3, 4, 5].map(item => (
                                <Paper key={item}
                                    elevation={1} p={2} bg="light" radius="1rem"
                                    flex='1 0 auto' width={'33.33%'} style={{ minWidth: '200px' }}
                                >
                                    <Stack justifyContent='space-between' alignItems="center">
                                        <Skeleton width="50px" />
                                        <Skeleton
                                            circle
                                            height="30px"
                                            width="30px"
                                            borderRadius="50%"
                                        />
                                    </Stack>
                                    <Stack mt={2} justifyContent='space-between' alignItems="center" direction="column">
                                        <Skeleton
                                            circle
                                            height="50px"
                                            width="50px"
                                            borderRadius="50%"
                                        /> <br />
                                        <Skeleton
                                            height="12px"
                                            width="160px"
                                        />
                                        <Skeleton
                                            height="10px"
                                            width="100px"
                                        /><br />

                                        <Stack spacing={2}>
                                            <Skeleton
                                                height="8px"
                                                width="60px"
                                            />
                                            <Skeleton
                                                height="8px"
                                                width="60px"
                                            />
                                        </Stack>
                                    </Stack>
                                </Paper>
                            ))
                        }
                    </Stack>
                </Stack>

                <Box className="spacing px" my={3}>
                    <Paper elevation={1} bg="light" radius="1rem">
                        <Box px={2} py={3}>
                            <Skeleton
                                height="12px"
                                width="250px"
                            />
                        </Box>
                        {
                            [99, 88, 77].map(item => (
                                <React.Fragment key={item}>
                                    <Box bg="body" py={1} px={2}
                                        borderBottom="1px solid rgba(0,0,0,.12)"
                                        borderTop="1px solid rgba(0,0,0,.12)">
                                        <Skeleton
                                            height="12px"
                                            width="200px"
                                        />
                                    </Box>
                                    {
                                        [789, 456].map(item => (
                                            <Stack key={item} py={1} px={2} alignItems="center" justifyContent="space-between" spacing={1}
                                                borderBottom="1px solid rgba(0,0,0,.12)">
                                                <Box>
                                                    <Skeleton
                                                        height="8px"
                                                        width="60px"
                                                    />
                                                </Box>
                                                <Box>
                                                    <Skeleton
                                                        circle
                                                        height="18px"
                                                        width="18px"
                                                        borderRadius="50%"
                                                    />
                                                </Box>
                                                <Box>
                                                    <TiWeatherCloudy size="20px" color='#64748B' />
                                                </Box>
                                                <Box>
                                                    <Skeleton
                                                        height="8px"
                                                        width="50px"
                                                    />
                                                </Box>

                                                <Box bg="transparent"><FaAngleDown /></Box>
                                            </Stack>
                                        ))
                                    }
                                </React.Fragment>
                            ))
                        }
                    </Paper>
                </Box>
            </Main>

        </Stack>
    )
}

export default Loading;