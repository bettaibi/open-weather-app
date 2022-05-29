import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import WithStyledThemeProvider from '../../../hoc/WithStyledThemeProvider';
import Sidebar from './..';

const MockedComponent = WithStyledThemeProvider(() => {
    return (
        <Sidebar>
            <div>Some content</div>
        </Sidebar>
    )
});

describe('Test Sidebar Component', () => {

    afterEach(cleanup);

    it('should render its children correctly on the screen', () => {   
        render(<MockedComponent />);    
        expect(screen.getByText('Some content')).toBeInTheDocument();
    });

    it('should not re-render on small devices', async () => {
        render(<MockedComponent />);
        const elem = screen.getByText(/Some content/i);
        // Set Window Size
        window.innerWidth = 300;
        window.innerHeight = 300;

        fireEvent(window, new Event('resize'));
        expect(elem).not.toBeInTheDocument();
    });
});