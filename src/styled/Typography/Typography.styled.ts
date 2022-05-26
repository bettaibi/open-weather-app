import styled from 'styled-components';
import { MarginProps, PaddingProps } from '../../models/styled.model';
import { colors, margins, paddings } from '../Common/Common.styled';


interface TypographyProps extends PaddingProps, MarginProps{
    color?: string;
    size?: string;
    fontWeight?: number | string;
}

export const Typography = styled.div<TypographyProps>`
    ${colors}
    ${({size})=> size && 'font-size:'+ size+';'}
    ${({fontWeight})=> fontWeight && 'font-weight:'+ fontWeight+';'}
    letter-spacing: 1px;
    margin: 0;
    padding: 0;

    ${paddings}
    ${margins}
`;

// Text
