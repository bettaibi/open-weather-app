import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { ErrorBoundary } from './components/ErrorBoundary';
import theme from './services/theme';
import CssBaseline from './styled/CssBaseline/CssBaseline.styled';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ThemeProvider>
  </React.StrictMode>
);
