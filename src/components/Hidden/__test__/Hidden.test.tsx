import { render, cleanup, screen, waitFor } from '@testing-library/react';
import Hidden from './..';

const MockedComponent = () => {
    return (
        <Hidden hiddenFor={["xs", "sm"]}>
            <p>Some content</p>
        </Hidden>
    )
}

describe('Test Hidden Component', () => {

    beforeEach(() => cleanup());

    it('should render properly on laptop, desktop and large screen devices', async() => {
        render(<MockedComponent />);

        const elem = screen.queryByRole<HTMLParagraphElement>('paragraph', { name: /Some content/i });

        waitFor(()=> {
            expect(elem).toBeInTheDocument();
        })
    });

    it('component should not render mobile devices', async() => {
        render(<MockedComponent />);
        const elem = screen.queryByRole<HTMLParagraphElement>('paragraph', { name: /Some content/i });
        
        global.innerWidth = 500;

        waitFor(()=> {
            expect(elem).toBeInTheDocument();
        })
    });

});
