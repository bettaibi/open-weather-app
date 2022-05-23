/**
 * A Paper element is a Box with extra features.
 */
import styled from 'styled-components';
import { Box, BoxProps } from '../Box/Box.styled';
import { elevations, ElevationVariants } from '../Common/Common.styled';

interface PaperProps extends BoxProps {
    elevation?: ElevationVariants;
    outlined?: boolean;
}

const Paper = styled(Box) <PaperProps>`
    ${elevations}
    
    ${({ outlined }) => outlined && 'border: 1px solid rgba(0, 0, 0, 0.12);'}

    &.active{
        border: 1px solid #404c68 !important;
        box-shadow: 0 0 0 0.2rem rgb(71 83 112 / 25%) !important;
    }
`;

export default Paper;