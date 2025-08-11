import React, { useState } from 'react';

const GroovifiFilters = () => {
  const [instrumental, setInstrumental] = useState(50);
  const [live, setLive] = useState(50);
  const [excludeExplicit, setExcludeExplicit] = useState(false);

  return (
    <div className="bg-black text-white p-6 w-full max-w-3xl mx-auto rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <div className="grid grid-cols-3 gap-6 items-center mb-6">
        {/* Mood Filter */}
        <div className="flex flex-col items-center">
          <span className="mb-2">Mood</span>
          <input
            type="range"
            min="0"
            max="100"
            value={instrumental}
            onChange={(e) => setInstrumental(e.target.value)}
            className="rotate-[-90deg] w-24"
          />
          <div className="flex justify-between w-full mt-2 text-sm">
            <span>Instrumental</span>
            <span>Vocal</span>
          </div>
        </div>

        {/* Sport Filter */}
        <div className="flex flex-col items-center relative">
          <span className="mb-2">Sport</span>
          <input
            type="range"
            min="0"
            max="100"
            value={live}
            onChange={(e) => setLive(e.target.value)}
            className="rotate-[-90deg] w-24"
          />
          <div className="flex justify-between w-full mt-2 text-sm">
            <span>Live</span>
            <span>Studio</span>
          </div>
          <div className="absolute left-[-30px] bottom-[-20px] text-red-400 font-bold">Sumit</div>
        </div>

        {/* Music Pro Placeholder */}
        <div className="text-center text-gray-400">Music Pro</div>
      </div>

      {/* Exclude Explicit Tracks Toggle */}
      <div className="flex items-center justify-between mb-4">
        <label htmlFor="explicitToggle" className="text-lg">Exclude Explicit tracks</label>
        <input
          id="explicitToggle"
          type="checkbox"
          checked={excludeExplicit}
          onChange={() => setExcludeExplicit(!excludeExplicit)}
          className="w-5 h-5"
        />
        <span className="text-red-400 font-bold absolute right-10">Rovert</span>
      </div>

      {/* Save Button */}
      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg w-full">
        Save playlist
      </button>
    </div>
  );
};

export default GroovifiFilters;
