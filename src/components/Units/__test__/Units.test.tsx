import { render, cleanup, screen } from '@testing-library/react';
import { UNITS } from '../../../models/app.model';
import Units from './..';
import WithStyledThemeProvider from '../../../hoc/WithStyledThemeProvider';
import WithReduxProvider from '../../../hoc/WithReduxProvider';

const MockedComponent = WithStyledThemeProvider(WithReduxProvider(()=> {
    return(
        <Units unit = {UNITS.CELSIUS} />
    )
}));

describe('Test tempture Units Component', () => {

    beforeEach(() => cleanup());

    it('should render Celsius as the default temperature unit', () => {
        render(<MockedComponent />);

        const btnElem = screen.queryByRole('button', {name: '℃'});
        expect(btnElem).toHaveClass('active');
    });

    // it('Unit should change to Fahrenheit when clicking on its target button', () => {
    //     render(<MockedComponent />);

    //     const btnElem = screen.getByRole('button', {name: '℉'});
    //     fireEvent.click(btnElem);

    //     expect(btnElem).toHaveClass('active');
    // });
});
