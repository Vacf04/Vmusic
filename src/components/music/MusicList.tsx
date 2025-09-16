"use client";
import { Track } from "@/actions/track-get";
import MusicCard from "../music/MusicCard";
import styles from "./MusicList.module.css";
import { useMusic } from "@/context/MusicContext";
import { useEffect } from "react";

export default function MusicList({
  tracks,
  cover = null,
}: {
  tracks: Track[];
  cover: string | null;
}) {
  const { setTrackList } = useMusic();

  useEffect(() => {
    setTrackList({ tracks, cover });
  }, [cover, setTrackList, tracks]);

  return (
    <ul className={styles.trackList}>
      {tracks.map((track, index) => (
        <MusicCard
          key={track.id}
          track={track}
          cover={cover ? cover : track.album.cover_medium}
          index={index}
        />
      ))}
    </ul>
  );
}
