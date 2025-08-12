// src/pages/FilterPage.jsx
import React from "react";
import InstrumentController from "../components/InstrumentController/InstrumentController";
import BPMController from "../components/BPMController/BPMController";
import BPMToggle from "../components/BPMToggle/BPMToggle";
import MoodSlider from "../components/MoodSlider/MoodSlider";
import SportSlider from "../components/SportSlider/SportSlider";
import Button from "../components/Button/Button"; 
import ToggleSwitch from "../components/Toggleswitch/ToggleSwitch";

const FilterPage = () => {
  return (
    
    <div style={{ padding: "20px", backgroundColor: "#111", color: "#fff", minHeight: "100vh" }}>
      {/* Header */}
      <h2 style={{ marginBottom: "20px" }}>Filters</h2>

      {/* Filter controls in a row */}
      <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", marginBottom: "30px" }}>
        {/* Mood (Instrument) */}
        <div style={{ textAlign: "center" }}>
          <p style={{ marginBottom: "10px", color: "lime" }}>Mood</p>
          <InstrumentController topLabel="Electronic" bottomLabel="Acoustic" />
        </div>

        {/* Sport */}
        <div style={{ textAlign: "center" }}>
          <p style={{ marginBottom: "10px", color: "lime" }}>Sport</p>
          <SportSlider />
        </div>

        {/* Music Pro */}
        <div style={{ textAlign: "center" }}>
          <p style={{ marginBottom: "10px", color: "lime" }}>Music Pro</p>
          <MoodSlider />
        </div>

        {/* BPM Toggle */}
        <div style={{ textAlign: "center" }}>
          <p style={{ marginBottom: "10px", color: "lime" }}>BPM</p>
          <BPMToggle />
        </div>

        {/* BPM Controller */}
        <div style={{ textAlign: "center" }}>
          <BPMController />
          <ToggleSwitch/>
          <Button/>
          
        </div>
      </div>

      {/* Save playlist button */}
      <div>
      </div>
    </div>
  );
};

export default FilterPage;
