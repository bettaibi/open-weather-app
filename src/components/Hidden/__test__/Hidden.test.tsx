import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import Hidden from './..';

const MockedComponent = () => {
    return (
        <Hidden hiddenFor={["xs", "sm"]}>
            <div>Some content</div>
        </Hidden>
    )
}

describe('Test Hidden Component', () => {

    afterEach(cleanup);

    it('should render properly on laptop, desktop and large screen devices', () => {
        render(<MockedComponent />);

        const elem = screen.getByText(/Some content/i);
        expect(elem).toBeInTheDocument();
    });

    it('component should not render on mobile devices', () => {
        render(<MockedComponent />);

        window.innerWidth = 500
        window.innerHeight = 500

        fireEvent(window, new Event('resize'));
  
        expect(screen.queryByText(/Some content/i)).not.toBeTruthy();
    });

});
