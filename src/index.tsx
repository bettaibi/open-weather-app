import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary';
/** Styled Components theme */
import { ThemeProvider } from 'styled-components';
import theme from './services/theme';
import CssBaseline from './styled/CssBaseline/CssBaseline.styled';
/** Redux toolkit Configuration */
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ErrorBoundary >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode >
);
