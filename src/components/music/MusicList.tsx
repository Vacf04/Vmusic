"use client";
import { Track } from "@/actions/track-get";
import MusicCard from "../music/MusicCard";
import styles from "./MusicList.module.css";

export default function MusicList({
  tracks,
  cover = null,
}: {
  tracks: Track[];
  cover: string | null;
}) {
  return (
    <ul className={styles.trackList}>
      {tracks.map((track) => (
        <MusicCard
          key={track.id}
          track={track}
          cover={cover ? cover : track.album.cover_medium}
        />
      ))}
    </ul>
  );
}
