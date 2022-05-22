import React from 'react';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Stack from './styled/Stack/Stack.styled';

function App() {
  
  return (
    <Stack>
        {/* SIDEBAR */}
        <Sidebar>
          Some Content here
        </Sidebar>

        {/* MAIN PAGE */}
        <Home />
    </Stack>
  );
}

export default App;
