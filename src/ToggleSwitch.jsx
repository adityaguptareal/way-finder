// import React, { useState } from 'react';
// import { FiLock } from 'react-icons/fi'; // or any icon you prefer

// const ToggleSwitch = () => {
//   const [enabled, setEnabled] = useState(false);

//   return (
//     <div
//       className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
//         enabled ? 'bg-green-500' : 'bg-gray-400'
//       }`}
//       onClick={() => setEnabled(!enabled)}
//     >
//       <div
//         className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
//           enabled ? 'translate-x-8' : 'translate-x-0'
//         }`}
//       ></div>
//       {!enabled && (
//         <FiLock className="absolute ml-10 text-gray-200 pointer-events-none" size={14} />
//       )}
//     </div>
//   );
// };

// export default ToggleSwitch;



import React, { useState } from 'react';
import { FiLock } from 'react-icons/fi';

const ToggleSwitch = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div
      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
        enabled ? 'bg-green-500' : 'bg-gray-300'
      }`}
      onClick={() => setEnabled(!enabled)}
    >
      <div
        className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
          enabled ? 'translate-x-6' : 'translate-x-0'
        }`}
      ></div>
      {!enabled && (
        <FiLock
          className="absolute ml-8 text-gray-500 pointer-events-none"
          size={12}
        />
      )}
    </div>
  );
};

export default ToggleSwitch;
