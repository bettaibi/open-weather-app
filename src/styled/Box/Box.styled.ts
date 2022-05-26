/**
 * Styled a reusable Box. Basic Properties.
 * Usually, a Box element plays the role of a Container or Wrapper.
 */
import styled from 'styled-components';
import { BorderProps, MarginProps, PaddingProps } from '../../models/styled.model';
import { background, borders, margins, paddings } from '../Common/Common.styled';

type PositionVariants = 'fixed' | 'absolute' | 'relative' | 'sticky';
type DisplayVariant = 'block' | 'inline' | 'inline-block' | 'none';

export interface BoxProps extends PaddingProps, MarginProps, BorderProps {
    width?: string;
    height?: string;
    flex?: string;
    display?: DisplayVariant;

    /** 'primary, secondary,..', or any other css color hexa-code is also a valid prop */
    bg?: string;

    position?: PositionVariants;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    zIndex?: number;
    radius?: string;
    textAlign?: 'center' | 'right' | 'left';
    overflow?: 'hidden' | 'auto' | 'scroll' | 'visible';
}

export const Box = styled.div<BoxProps>`
    ${paddings}
    ${margins}
    ${background}
    ${borders}

    ${({ width }) => width && 'width: ' + width + ';'}
    ${({ height }) => height && 'height: ' + height + ';'}

    ${({ display }) => display && 'display: ' + display + ';'}
    ${({ radius }) => radius && 'border-radius: ' + radius + ';'}

    ${({ position }) => position && 'position: ' + position + ';'}
    ${({ top }) => top && 'top: ' + top + ';'}
    ${({ bottom }) => bottom && 'bottom: ' + bottom + ';'}
    ${({ left }) => left && 'left: ' + left + ';'}
    ${({ right }) => right && 'right: ' + right + ';'}
    ${({ zIndex }) => zIndex && 'z-index: ' + zIndex + ';'}

    ${({ textAlign }) => textAlign && 'text-align:' + textAlign + ';'}
    ${({ flex }) => 'flex:' + flex + ';'}
    ${({ overflow }) => 'overflow:' + overflow + ';'}
`;