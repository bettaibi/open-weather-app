/**
 * A Paper element is a Box with extra features.
 */
import styled from 'styled-components';
import { Box, BoxProps } from '../Box/Box.styled';
import { elevations } from '../Common/Common.styled';

type ElevationVariants = 0 | 1 | 2 | 3;

interface PaperProps extends BoxProps {
    elevation?: ElevationVariants;
    outlined?: boolean;
}

const Paper = styled(Box) <PaperProps>`
    ${elevations}

    ${({ outlined }) => outlined && 'border: 1px solid rgba(0, 0, 0, 0.12);'}
`;

export default Paper;