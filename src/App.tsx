import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Roads from './components/Roads';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Roads />
    </BrowserRouter>
  );
}

export default App;