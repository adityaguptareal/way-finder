import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import TestComponents from './pages/TestComponents'; // Make sure this path is correct

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* You can optionally show logos or state here */}
        {/* Example: <img src={reactLogo} alt="React Logo" /> */}
        
        {/* Replace the placeholder text with your component */}
        <TestComponents />
      </div>
    </>
  );
}

export default App;
