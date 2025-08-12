import React, { useState } from "react";
import InstrumentController from "../components/InstrumentController/InstrumentController";
import BPMController from "../components/BPMController/BPMController";
import BPMToggle from "../components/BPMToggle/BPMToggle";
import MoodSlider from "../components/MoodSlider/MoodSlider";
import Button from "../components/Button/Button";
import ToggleSwitch from "../components/Toggleswitch/ToggleSwitch";
import styles from "./FilterPage.module.css";

const FilterPage = () => {
  const [active, setActive] = useState("mood");

  const sections = [
    {
      id: "mood",
      title: "Mood",
      controls: [
        { type: "mood", top: "Electronic", bottom: "Acoustic" },
        { type: "mood", top: "Energetic", bottom: "Mellow" },
        { type: "mood", top: "Happy", bottom: "Sad" },
        { type: "mood", top: "Danceable", bottom: "Chill" },
        { type: "mood", top: "Popular", bottom: "Obscure" },
      ],
    },
    {
      id: "sport",
      title: "Sport",
      controls: [
        { type: "bpmToggleCentered" },
        { type: "bpmFullWidth" },
      ],
    },
    {
      id: "musicpro",
      title: "Music Pro",
      controls: [
        { type: "toggle", label: "Major" },
        { type: "toggle", label: "Off" },
        { type: "toggle", label: "Minor" },
      ],
    },
    {
      id: "other",
      title: "Other",
      controls: [
        { type: "instrument" },
        { type: "bpmController" },
        { type: "bpmToggle" },
        { type: "key", value: "D" },
      ],
    },
  ];

  const resetAll = () => {
    console.log("Reset filters (wire to real handlers)");
  };

  const renderControl = (control, idx) => {
    switch (control.type) {
      case "mood":
        return (
          <div className={styles.sliderCard} key={idx}>
            <div className={styles.sliderTop}>{control.top}</div>
            <div className={styles.sliderWrap}>
              <InstrumentController orientation="vertical" />
            </div>
            <div className={styles.sliderBottom}>{control.bottom}</div>
          </div>
        );

      case "bpmToggleCentered":
        return (
          <div className={styles.bpmToggleCentered} key={idx}>
            <BPMToggle />
          </div>
        );

      case "bpmFullWidth":
        return (
          <div className={styles.bpmFullWidth} key={idx}>
            <BPMController />
          </div>
        );

      case "toggle":
        return (
          <div className={styles.toggleChip} key={idx}>
            <ToggleSwitch label={control.label} />
          </div>
        );

      case "instrument":
        return (
          <div className={styles.otherRow} key={idx}>
            <InstrumentController />
          </div>
        );

      case "bpmController":
        return (
          <div className={styles.otherRow} key={idx}>
            <BPMController />
          </div>
        );

      case "bpmToggle":
        return (
          <div className={styles.otherRow} key={idx}>
            <BPMToggle />
          </div>
        );

      case "key":
        return (
          <div className={styles.keyPill} key={idx}>
            Key: <strong style={{ marginLeft: 8 }}>{control.value}</strong>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.headerRow}>
        <h2 className={styles.filtersTitle}>Filters</h2>
        <button className={styles.resetBtn} onClick={resetAll} aria-label="Reset filters">
          ⟳ Reset
        </button>
      </div>

      <div className={styles.filtersRow}>
        {sections.map((sec) => {
          const isActive = sec.id === active;
          return (
            <div
              key={sec.id}
              className={`${styles.filterSection} ${isActive ? styles.activeSection : ""}`}
              role="region"
              aria-labelledby={`section-${sec.id}`}
            >
              <button
                id={`section-${sec.id}`}
                className={`${styles.sectionHeader} ${isActive ? styles.sectionHeaderActive : ""}`}
                onClick={() => setActive(sec.id)}
                aria-pressed={isActive}
              >
                {sec.title}
              </button>

              <div className={styles.controlsWrap} aria-hidden={!isActive}>
                {isActive && (
                  <div
                    className={
                      sec.id === "mood"
                        ? styles.controlsGridColumns
                        : styles.controlsInline
                    }
                  >
                    {sec.controls.map((c, i) => renderControl(c, i))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.saveBtn}>
        <Button text="Save playlist" />
      </div>
    </div>
  );
};

export default FilterPage;
