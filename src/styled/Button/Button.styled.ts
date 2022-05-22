import styled from 'styled-components';
import { background, elevations, ElevationVariants } from '../Common/Common.styled';

interface ButtonProps{
    /** Limited button props here, we could extend more in the future */
    color?: string;
    bg?: string;
    elevation?: ElevationVariants;
}
const Button = styled.button<ButtonProps>`
    border: none;
    outline: none;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    padding: 6px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({theme})=> theme.radius.base+'px;'};
    ${({color})=> 'color: '+color+';'}
    transition: transform 300ms ease-in-out, background-color 300ms ease-in-out;
    &:active{
        transform: scale(.96);
    }

    background-color: ${({theme})=> theme.colors.primary};
    ${background}
    ${elevations}
`;

const FabButton = styled(Button)`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    color: ${({theme})=> theme.colors.primary};

    &.active{
        background-color: ${({theme})=> theme.colors.primary};
        color: #fff;
    }
`;

export {Button, FabButton};