import { DefaultTheme } from 'styled-components';
// #f1f5f9
const theme: DefaultTheme ={
    colors: {
        primary: '#0f172a',
        secondary: '#64748B',
        accent: '#EECE1A',
        body: '#f8fafc'
    },
    spacing: {
        base: 8 // same approach as Material
    },
    radius: {
        base: 4
    },
    typography: {
        fontSize: 14
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 992,
            lg: 1200,
            xl: 1536,
        },
    },
};

export default theme;