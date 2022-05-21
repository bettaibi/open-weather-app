/**
 * App Global CSS Style Using Styled Components
 */

import { createGlobalStyle } from "styled-components";

const CssBaseline = createGlobalStyle`

    *, *::after, *::before{
        box-sizing: border-box;
    }
    html{
        font-size: ${({theme})=> theme.typography.fontSize};
    }
    body{
        font-family: 'Roboto', sans-serif;
        margin: 0;
        color: ${({theme})=> theme.colors.primary};
        background-color: ${({theme})=> theme.colors.body};
    }
`;

export default CssBaseline;