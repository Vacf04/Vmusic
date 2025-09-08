"use client";
import { Track } from "@/actions/track-get";
import MusicCard from "../music/MusicCard";
import styles from "./TopTracks.module.css";

export default function TopTracks({ topTracks }: { topTracks: Track[] }) {
  console.log(topTracks);
  return (
    <section className={`${styles.topTracksSection} showRight`}>
      <h1>As mais escutadas</h1>
      <ul className={styles.topTracks}>
        {topTracks.map((track) => (
          <MusicCard key={track.id} track={track} />
        ))}
      </ul>
    </section>
  );
}
