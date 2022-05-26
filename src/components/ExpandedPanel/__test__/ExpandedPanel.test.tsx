import { render, cleanup, screen, waitFor, fireEvent } from '@testing-library/react';
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
            panel = {
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

    beforeEach(() => cleanup());

    it('Panel area should be hidden at the initial rendering', async() => {
        render(<MockedComponent />);

        const elem = screen.queryByRole<HTMLParagraphElement>('paragraph', { name: /Panel prop represent the hidden area/i });

        waitFor(() => expect(elem).not.toBeVisible());

    });

    it('Panel area should be visible when clicking on the toogle button', async() => {
        render(<MockedComponent />);

        const elem = screen.queryByRole<HTMLParagraphElement>('paragraph', { name: /Panel prop represent the hidden area/i });
        const toggleBtn = screen.getByRole('button', {name: /toggle/});
        fireEvent.click(toggleBtn);

        waitFor(() => expect(elem).toBeVisible());
    });

});
