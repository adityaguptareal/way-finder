
// import React from 'react';
// import Button from './Button';
// import ToggleSwitch from './ToggleSwitch';
// import { FiRotateCcw } from 'react-icons/fi';
// import GroovifiFilters from './GroovifiFilters';

// const App = () => {
//   return (
//     <div className="flex flex-col gap-2 items-center justify-center h-screen bg-gray-900 space-y-6 gap-6">
//       <Button label="Reset" icon={<FiRotateCcw />} variant="gray" />
//       <Button label="Save playlist" variant="green" />
//       <ToggleSwitch />
//       <GroovifiFilters/>
//     </div>
//   );
// };

// export default App;



import React from 'react';
import Button from './Button';
import ToggleSwitch from './ToggleSwitch';
import { FiRotateCcw } from 'react-icons/fi';
// import GroovifiFilters from './GroovifiFilters';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 space-y-6">
      <Button label="Reset" icon={<FiRotateCcw />} variant="gray" />
      <Button label="Save playlist" variant="green" />
      <ToggleSwitch />
      {/* <GroovifiFilters /> */}
    </div>
  );
};

export default App;
