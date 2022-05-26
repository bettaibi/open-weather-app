/**
 * App Global CSS Style Using Styled Components
 */

import { createGlobalStyle } from "styled-components";

const CssBaseline = createGlobalStyle`

    *, *::after, *::before{
        box-sizing: border-box;
    }

    html{
        font-size: ${({ theme }) => theme.typography.fontSize};
    }
    
    body{
        font-family: 'Roboto', sans-serif;
        margin: 0;
        overflow: hidden;
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.body};
    }

    /* Page spacing */
    .spacing {
        &.p {
            padding: 48px;
        }

        &.px {
            padding-left: 48px;
            padding-right: 48px;
        }

        &.py {
            padding-top: 48px;
            padding-bottom: 48px;
        }

        &.m {
            margin: 48px;
        }

        &.mx {
            margin-left: 48px;
            margin-right: 48px;
        }

        &.my {
            margin-top: 48px;
            margin-bottom: 48px;
        }

        @media (max-width: 768px) {
            &.p {
                padding: 24px;
            }

            &.px {
                padding-left: 24px;
                padding-right: 24px;
            }

            &.py {
                padding-top: 24px;
                padding-bottom: 24px;
            }
            &.m {
            margin: 24px;
            }

            &.mx {
                margin-left: 24px;
                margin-right: 24px;
            }

            &.my {
                margin-top: 24px;
                margin-bottom: 24px;
            }
        }
    }
`;

export default CssBaseline;