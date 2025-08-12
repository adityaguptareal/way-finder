import React from 'react';
import Button from './Button';
import ToggleSwitch from './ToggleSwitch';
import { FiRotateCcw } from 'react-icons/fi';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Button label="Reset" icon={<FiRotateCcw />} variant="gray" />
      <Button label="Save playlist" variant="green" />
      <ToggleSwitch />

    </div>
  );
};

export default App;


