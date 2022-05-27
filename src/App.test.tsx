/**
  App: Integration tests.
  Test how components interact with each other.
*/
import { 
  render, 
  screen, 
  cleanup,
  waitForElementToBeRemoved,
  waitFor
} from '@testing-library/react';
import App from './App';
import WithStyledThemeProvider from './hoc/WithStyledThemeProvider';
import WithReduxProvider from './hoc/WithReduxProvider';

const MockedComponent = WithStyledThemeProvider(WithReduxProvider(()=> {
  return(
      <App />
  )
}));

describe("Integration Test, after application fully loads", () => {
  
  afterEach(cleanup)

  it("should render Home page on the screen after loading", async ()=> {

  });

  
});