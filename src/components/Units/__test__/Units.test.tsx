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

describe('Test Tempture Units Component', () => {

    afterEach(() => cleanup())

    it('should render Celsius as the default temperature unit', () => {
        render(<MockedComponent />);

        const btnElem = screen.queryByRole('button', {name: '℃'});
        expect(btnElem).toHaveClass('active');
    });
});
