import { render, cleanup, screen, waitFor } from '@testing-library/react';
import WithStyledThemeProvider from '../../../hoc/WithStyledThemeProvider';
import Sidebar from './..';

const MockedComponent = WithStyledThemeProvider(() => {
    return (
        <Sidebar>
            <p>Some content</p>
        </Sidebar>
    )
});

describe('Test Sidebar Component', () => {

    beforeEach(() => cleanup());

    it('should render its children correctly on the screen', async() => {
        render(<MockedComponent />);

        const elem = screen.queryByRole<HTMLParagraphElement>('paragraph', { name: /Some content/i });
        waitFor(()=> {
            expect(elem).toBeInTheDocument();
        })
    });

    it('should not re-render on small screen sizes', async() => {
        render(<MockedComponent />);
        const elem = screen.queryByRole<HTMLParagraphElement>('paragraph', { name: /Some content/i });
        // Set Window Size
        global.innerWidth = 500;
        
        waitFor(()=> {
            expect(elem).not.toBeInTheDocument();
        });
    
    });

});
