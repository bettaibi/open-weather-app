import styled from 'styled-components';

const Main = styled.main`
    
width: calc(100vw - 300px) !important;
height: 100vh;
overflow-y: auto;

@media (max-width: 768px) {
        width: 100% !important;
}
`;

export default Main;