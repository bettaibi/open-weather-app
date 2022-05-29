import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import Search from './..';
import WithStyledThemeProvider from '../../../hoc/WithStyledThemeProvider';
import WithReduxProvider from '../../../hoc/WithReduxProvider';

const MockedComponent = WithStyledThemeProvider(WithReduxProvider(()=> {
    return(
        <Search text = ''/>
    )
}));

describe('Test Input Search Component', () => {

    afterEach(() => cleanup());

    beforeEach(() => render(<MockedComponent />));

    it('should render with an empty text value at the initial rendering', () => {
        const inputElem = screen.getByPlaceholderText<HTMLInputElement>(/Search for a city/i);
        expect(inputElem.value).toBe('');
    });

    it('Input value should change correctly when user typing', ()=> {
        const inputElem = screen.getByPlaceholderText<HTMLInputElement>(/Search for a city/i);
        fireEvent.change(inputElem, {target: {value: 'programming is my passion'}});

        expect(inputElem.value).toBe('programming is my passion');
    })

});
