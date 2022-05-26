import 'styled-components';

export type ColorsProps = {
    primary: string;
    secondary: string;
    accent: string;
    light: string;
    body: string;
};

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: ColorsProps,

        spacing: {
            base: number
        },
        radius: {
            base: number
        },
        typography: {
            fontSize: number
        },
        breakpoints: {
            values: {
                xs: number,
                sm: number,
                md: number,
                lg: number,
                xl: number,
            },
        },
    }
}