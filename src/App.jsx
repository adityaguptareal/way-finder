import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import TestComponents from "./pages/TestComponents"; // Make sure this path is correct
import InstrumentController from "./components/InstrumentController/InstrumentController";
import BPMController from "./components/BPMController/BPMController";
import BPMToggle from "./components/BPMToggle/BPMToggle";
import MoodSlider from "./components/MoodSlider/MoodSlider";
import SportSlider from "./components/SportSlider/SportSlider";
import FilterPage from "./pages/FilterPage";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

 
  return( 
    <>
    <Home></Home>
    </>
  );
}

export default App;
