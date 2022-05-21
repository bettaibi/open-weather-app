import styled from 'styled-components';

/** I putted only the necessary props, we could make it more reusable in the future */
interface TextFieldProps{
    variant?: 'rounded' | 'default';
}

const TextField = styled.input<TextFieldProps>`
    width: 100%;
    font-size: .9rem;
    line-height: 1.5;
    min-height: 40px;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    padding: 0.25rem 0.5rem;
    transition: all .15s ease-in-out;
    box-shadow: none;
    outline: none;
    position: relative;
    &:focus{
        border-color: #404c68;
        box-shadow: 0 0 0 0.2rem rgb(71 83 112 / 25%);
    }
    border-radius: ${({theme})=> theme.radius.base+'px'};
    ${({variant})=> variant && ' border-radius: 24px; !important'}
`;

export default TextField;