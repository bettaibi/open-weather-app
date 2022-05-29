import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import WithStyledThemeProvider from '../../../hoc/WithStyledThemeProvider';
import useToggle from '../../../hooks/useToggle';
import ExpandedPanel from '../ExpandedPanel';

const MockedComponent = WithStyledThemeProvider(() => {
    const { show, handleToggle } = useToggle();

    return (
        <ExpandedPanel
            show={show}
            content={
                <div>
                    <p>Content prop represent the shown area</p>
                    <button onClick={handleToggle}>toggle</button>
                </div>
            }
            panel={
                <div>
                    <p>
                        Panel prop represent the hidden area
                    </p>
                </div>
            }
        />
    )
});

describe('Test ExpandedPanel Component', () => {

    afterEach(() => cleanup())

    it('Panel area should be hidden at the initial rendering', () => {
        render(<MockedComponent />);

        const elem = screen.getByTestId('panel-container');

        expect(elem).toHaveStyle({height: 0});

    });

    it('Panel area should be visible when clicking on the toogle button', () => {
        render(<MockedComponent />);
        const elem = screen.getByTestId('panel-container');
        const toggleBtn = screen.getByRole('button', { name: /toggle/ });
        fireEvent.click(toggleBtn);

        expect(elem).toBeVisible();
    });

});
