import { FaArrowLeft, FaPlay, FaPause } from "react-icons/fa";
import spotifyIcon from "../assets/spotify-green.png";
import spotifyGrayIcon from "../assets/spotify-gray.png";
import flowerImg from "../assets/flower.jpeg";
import cat from "../assets/cat.jpeg";
import nature from "../assets/nature.jpeg";
import pandas from "../assets/pandas.jpeg";
import puppy from "../assets/puppy.jpeg";
import { useState } from "react";
import styles from "./TestComponents.module.css";

export default function TestComponents() {
  const tracks = [
    { id: 1, title: "River", artist: "Soll", image: flowerImg, available: true },
    { id: 2, title: "I'm Dreaming Of You", artist: "Candelion", image: cat, available: true },
    { id: 3, title: "The Oceans", artist: "Davis John Patton", image: nature, available: true },
    { id: 4, title: "The Well", artist: "SAILR", image: pandas, available: true },
    { id: 5, title: "a million pretty pieces", artist: "Nightly", image: puppy, available: true },
    { id: 6, title: "Always Mine", artist: "Lacero Pilka", image: nature, available: false },
    { id: 7, title: "River", artist: "Soll", image: flowerImg, available: true },

  ];

  const [playingTrackId, setPlayingTrackId] = useState(null);

  const togglePlay = (id) => {
    setPlayingTrackId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.backButton}>
          <FaArrowLeft />
        </button>
        <div className={styles.headerTextRow}>
          <span className={styles.headerTitle}>Groovifi:</span>
          <span className={styles.headerSubtitle}>Nothing's Missing</span>
          <span className={styles.headerTitle}>Groovifi:</span>
          <span className={styles.headerSubtitle}>Nothing's Missing</span>
          <span className={styles.headerTitle}>Groovifi:</span>
          <span className={styles.headerSubtitle}>Nothing's Missing</span>
          <span className={styles.headerTitle}>Groovifi:</span>
          <span className={styles.headerSubtitle}>Nothing's Missing</span>
        </div>
      </div>

      <div className={styles.trackCount}>
        <span>50 tracks</span>
      </div>

      <div className={styles.trackList}>
        {tracks.map((track) => (
          <div key={track.id} className={styles.trackItem}>
            <img src={track.image} alt={track.title} className={styles.albumArt} />
            <div className={styles.songInfo}>
              <h3 className={styles.songTitle}>{track.title}</h3>
              <p className={styles.songArtist}>{track.artist}</p>
            </div>
            <button className={styles.playButton} onClick={() => togglePlay(track.id)}>
              {playingTrackId === track.id ? <FaPause size={14} /> : <FaPlay size={14} />}
            </button>
            <img
              src={track.available ? spotifyIcon : spotifyGrayIcon}
              alt="Spotify"
              className={styles.spotifyIcon}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

