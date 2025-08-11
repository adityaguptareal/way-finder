
// import React from 'react';

// const Button = ({ label, icon, variant = 'gray' }) => {
//   const colorClasses = {
//     gray: 'bg-gray-400 hover:bg-gray-500',
//     green: 'bg-green-500 hover:bg-green-600',
//   };

//   return (
//     <button
//       className={`flex items-center justify-center px-6 py-3 rounded-full text-white font-semibold shadow-lg transition duration-300 ${colorClasses[variant]}`}
//     >
//       {icon && <span className="mr-2 text-lg">{icon}</span>}
//       {label}
//     </button>
//   );
// };

// export default Button;



import React from 'react';

const Button = ({ label, icon, variant = 'gray', onClick }) => {
  const colorClasses = {
    gray: 'bg-[#E6E6E6] hover:bg-[#d4d4d4] text-black', // Reset button style
    green: 'bg-[#1DB954] hover:bg-[#1ed760] text-white', // Spotify green
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center px-6 py-2 rounded-full font-medium shadow transition duration-300 ${colorClasses[variant]}`}
    >
      {icon && <span className="mr-2 text-lg">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
