"use client";
import { Track } from "@/actions/track-get";
import styles from "./TopTracks.module.css";
import MusicList from "./MusicList";

export default function TopTracks({ topTracks }: { topTracks: Track[] }) {
  return (
    <section className={`${styles.topTracksSection} showRight`}>
      <h1>As mais escutadas</h1>
      <MusicList tracks={topTracks} cover={null} />
    </section>
  );
}
