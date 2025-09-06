"use client";
import { Track } from "@/actions/track-get";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./MusicCard.module.css";

export default function MusicCard({ track }: { track: Track }) {
  const [musicPreview, setMusicPreview] = useState(track.preview);

  const handleMusicClick = () => {};

  return (
    <li onClick={handleMusicClick} className={styles.musicItem}>
      <Image
        src={track.album.cover_small}
        width={50}
        height={50}
        alt={`Capa do ${track.album.title}`}
      />
      <div>
        <p className={styles.title}>{track.title}</p>
        <Link href={`/artista/${track.artist.id}`} className={styles.artist}>
          {track.artist.name}
        </Link>
      </div>
      <p className={styles.duration}>{`${Math.floor(track.duration / 60)}:${
        (track.duration % 60).toString().length === 1
          ? `${track.duration % 60}0`
          : track.duration % 60
      }`}</p>
    </li>
  );
}
