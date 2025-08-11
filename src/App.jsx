

import React from 'react';
import Button from './Button';
import ToggleSwitch from './ToggleSwitch';
import { FiRotateCcw } from 'react-icons/fi';
;

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 space-y-6">
      <Button label="Reset" icon={<FiRotateCcw />} variant="gray" />
      <Button label="Save playlist" variant="green" />
      <ToggleSwitch />

    </div>
  );
};

export default App;
