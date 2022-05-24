/**
 * HOC was built for unit test purposes.
 */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../services/theme';

function WithStyledThemeProvider(WrappedComponent: React.ComponentType) {

    return class extends React.Component {

        constructor(props: any) {
            super(props);
        }

        render(): React.ReactNode {
            return (
                <ThemeProvider theme={theme}>
                    <WrappedComponent {...this.props} />
                </ThemeProvider>
            )
        }
    }
}

export default WithStyledThemeProvider;