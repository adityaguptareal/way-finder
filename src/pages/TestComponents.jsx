import React from "react";
import BPMToggle from '../components/BPMToggle/BPMToggle';
import MoodSlider from '../components/MoodSlider/MoodSlider';
import SportSlider from '../components/SportSlider/SportSlider';

const TestComponents = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: '40px',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '40px',
      backgroundColor: '#2f2f2fff',
      color: 'white',
    }}>
      <MoodSlider />
      <SportSlider />
      <BPMToggle />
    </div>
  );
};

export default TestComponents;
