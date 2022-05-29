import { render, cleanup, screen } from '@testing-library/react';
import WithStyledThemeProvider from '../../../hoc/WithStyledThemeProvider';
import { Paper, Box } from '../../../styled';
import Carousel from './..';

const MockedComponent = WithStyledThemeProvider(() => {
    return (
        <Carousel>
            {
                [1, 2, 3, 4, 5].map(item => (
                    // Fake Cards (we assume that today's card is at the fourth position)
                    <Paper
                        data-id={item === 4 ? 'today' : item}
                        key={item} flex='1 0 auto' width={'33.33%'}
                        style={{ minWidth: '200px' }}
                        className={item === 4  ? 'active' : ''}
                        data-testid = {`card-${item}`}>

                        <Box as="p" data-testid="cards-content">
                            Weather forecast details
                        </Box>
                    </Paper>
                ))
            }
        </Carousel>
    )
});

describe('Test Carousel Component', () => {

    afterEach(() => cleanup())

    it("Today's Card should be visible at the initial rendering", () => {
        render(<MockedComponent />);
        const todaysCard = screen.getByTestId('card-4');

        expect(todaysCard).toBeVisible();
    });

    it("Today's Card should have active class", async () => {
        render(<MockedComponent />);
        const todaysCard = screen.getByTestId('card-4');

        expect(todaysCard).toHaveClass('active');
    });

});
