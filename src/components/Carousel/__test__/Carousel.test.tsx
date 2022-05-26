import { render, cleanup, waitFor, fireEvent, screen, findAllByTestId } from '@testing-library/react';
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

    beforeEach(() => cleanup());

    // it('Only 3 cards should be visible on the screen', async () => {
    //     const {getAllByTestId} = render(<MockedComponent />);

    //     const cards = getAllByTestId('cards-content')
    //     expect(cards.length).toEqual(3);

    // });

    it("Today's Card should be visible at the initial rendering", async () => {
        render(<MockedComponent />);
        const todaysCard = screen.getByTestId('card-4');

        expect(todaysCard).toBeVisible();
    });

    it("Today's Card should have active class", async () => {
        render(<MockedComponent />);
        const todaysCard = screen.getByTestId('card-4');

        expect(todaysCard).toHaveClass('active');
    });

    it("Navigate to previous card when clicking on the previous btn", async () => {
        render(<MockedComponent />);
        const targetCard = screen.queryByTestId('card-2');
        
        waitFor(() => {
            const prevBtn = screen.getByTestId<HTMLButtonElement>('prev-btn');
            fireEvent.click(prevBtn);
            expect(targetCard).toBeVisible();
        });
    });
    it("navigation buttons should be hidden on mobile", async () => {
        render(<MockedComponent />);
        
        global.innerWidth = 500;
        
        waitFor(() => {
            const prevBtn =  screen.queryByTestId<HTMLButtonElement>('prev-btn');
            const nextBtn =  screen.queryByTestId<HTMLButtonElement>('next-btn'); console.log(prevBtn)
            expect(prevBtn).not.toBeDefined();
            expect(nextBtn).not.toBeInTheDocument();
        });
    });

});
