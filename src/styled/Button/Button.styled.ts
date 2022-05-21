import styled from 'styled-components';
import { background } from '../Common/Common.styled';

interface ButtonProps{
    /** Limited button props here, we could extend more in the future */
    color?: string;
    bg?: string;
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
    border-radius: ${({theme})=> theme.radius.base+'px;'};
    ${({color})=> 'color: '+color+';'}
    transition: transform 300ms linear;
    &:active{
        transform: scale(.98);
    }

    background-color: ${({theme})=> theme.colors.primary};
    ${background}
`;

const FabButton = styled(Button)`
    width: 45px;
    height: 45px;
    border-radius: 50%;
`;

export {Button, FabButton};