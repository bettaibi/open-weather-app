/**
 * A Stack element is a Box with extra features. (flexbox)
 */
import styled from 'styled-components';
import { Box, BoxProps } from '../Box/Box.styled';

type DirectionVariants = 'column' | 'row' | 'row-reverse' | 'column-reverse';
type flexAlignVariants = 'flex-start' | 'flex-end' | 'space-around' | 'center' | 'space-between';
type wrapVariants = 'wrap' | 'no-wrap';

interface StackProps extends BoxProps{
    direction?: DirectionVariants;
    alignItems?: flexAlignVariants;
    justifyContent?: flexAlignVariants;
    flexWrap?: wrapVariants;
    spacing?: number;
}

const Stack = styled(Box)<StackProps>`
    display: flex !important;
    flex-direction: ${({ direction})=> direction || 'row'};
    align-items: ${({ alignItems})=> alignItems || 'flex-start'};
    justify-content: ${({ justifyContent})=> justifyContent || 'flex-start'};
    flex-wrap: ${({ flexWrap})=> flexWrap || 'no-wrap'};
    gap: ${({ spacing, theme})=> spacing ? spacing * theme.spacing.base : 0}px;
`;

export default Stack;