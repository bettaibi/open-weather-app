/**
  App: Integration tests.
  Test how components interact with each other.
*/
import { render, screen, cleanup } from '@testing-library/react';
import App from './App';
import WithStyledThemeProvider from './hoc/WithStyledThemeProvider';
import WithReduxProvider from './hoc/WithReduxProvider';

const MockedComponent = WithStyledThemeProvider(WithReduxProvider(()=> {
  return(
      <App />
  )
}));

describe("App Integration Test", () => {

  afterEach(() => cleanup());

  it("Should shows loading Component at the first rendering", ()=> {

  });
  
});