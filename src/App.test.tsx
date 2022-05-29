/**
  App: Integration tests.
  Test how components interact with each other.
*/
import {
  render,
  screen,
  cleanup,
  waitFor,
  within
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';
import WithStyledThemeProvider from './hoc/WithStyledThemeProvider';
import WithReduxProvider from './hoc/WithReduxProvider';
import moment from 'moment';
import { server } from './mocks/server';
import { rest } from 'msw';
import {config} from './services/config';

// Mock Apex Chart Component
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";

jest.mock('react-apexcharts', () => jest.fn(() => { return null }));
jest.mock('apexcharts', () => ({ exec: jest.fn(() => { return new Promise((resolve, reject) => { resolve("uri") }) }) }));

const MockedComponent = WithStyledThemeProvider(WithReduxProvider(() => {
  return (
    <App />
  )
}));

describe("Integration Test, after application fully loads", () => {

  afterEach(() => {
    cleanup();
  });

  beforeEach(async () => {
    render(<MockedComponent />);
    await waitFor(async () => await screen.findByRole('main'));
  });

  /** Default APP State */
  it("should render Home page on the screen after loading", async () => {
    expect(screen.getByRole('main')).toBeInTheDocument()
  });

  it("should render weather forecast for Tunis as the default selected city", async () => {
    expect(screen.getByText(/Forecast for Tunis/i)).toBeInTheDocument();
  });

  it('should render Celsius as the default temperature unit', () => {
    expect(screen.queryByRole('button', { name: '℃' })).toHaveClass('active');
  });

  /** USER Interaction */
  describe("When User change the search tempture unit criteria to Fahrenheit", () => {

    beforeEach(()=> {
      const btnElem = screen.getByRole<HTMLButtonElement>('button', { name: '℉' });
      userEvent.click(btnElem);
    });

    it("App should load when the user hit the Api for the first time", async () => {
      expect(await screen.findByTestId('app-loading')).toBeInTheDocument();
    });

    it('Unit should change to Fahrenheit when clicking on its target button', () => {
      expect(screen.getByRole('button', { name: '℉' })).toHaveClass('active');
    });

    it('Celsius button is no longer active', async() => {
      expect(await screen.findByRole('button', {name: '℃'}) ).not.toHaveClass('active');
    });

    it("Today's tempture must be equal to 80.6 (Initial value in Celsius: 27)", async()=> {
      const todaysCard = screen.getByTestId('today-forecast');
      expect(within(todaysCard).getByText(Math.round(80.6))).toBeInTheDocument(); // 27 * 1.8 + 32
    });

  });

  describe('When the user Search for a new City', ()=> {
    beforeEach(() => {
      const searchInput = screen.getByPlaceholderText<HTMLInputElement>(/Search for a city/i);
      userEvent.type(searchInput, 'Kasserine {enter}');
    });

    it("App should load when Searching for a new City", async () => {
      expect(await screen.findByTestId('app-loading')).toBeInTheDocument();
    });

    it("should render weather forecast for Kasserine City", async () => {
      expect(screen.getByText(/Forecast for Kasserine/i)).toBeInTheDocument();
    });

    it("the centred active card should be for today's forecast", async () => {
      const todaysCard = screen.getByTestId('today-forecast');
      const today = moment(new Date()).format('dd, D/MM');

      expect(within(todaysCard).getByText(today)).toBeInTheDocument();
    });

    it("today's forecast card should have an active class ", async () => {
      const todaysCard = screen.getByTestId('today-forecast');
      expect(todaysCard).toHaveClass('active');
    });

    it("We expect Weather forecast details to be shown", ()=> {
      expect(screen.queryAllByText(/Feels Like/i).length).toBeGreaterThan(0);
      expect(screen.queryAllByText(/Humidity/i).length).toBeGreaterThan(0);
      expect(screen.queryAllByText(/Sunrise/i).length).toBeGreaterThan(0);
      expect(screen.queryAllByText(/Sunset/i).length).toBeGreaterThan(0);
    });

  });

  describe('When the server returns error', () => {
    const url = config.WEATHER_FORCAST_URL;

    beforeEach(()=> {
      server.use(
        rest.get(url, (req, res, ctx) => {
          return res(ctx.status(500));
        }),
      )
      const searchInput = screen.getByPlaceholderText<HTMLInputElement>(/Search for a city/i);
      userEvent.type(searchInput, 'Sfax {enter}');
    });

    it('handles server error', async () => {
      // We expect to redirect to Error Fallback page
      expect(await screen.findByText('Oops, Something went wrong :(')).toBeInTheDocument();
    });

  });

});
