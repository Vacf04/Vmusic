"use client";

import { AlbumData } from "@/actions/album-get";
import Image from "next/image";
import styles from "./AlbumSection.module.css";
import { BiPlay } from "react-icons/bi";
import Link from "next/link";
import MusicList from "../music/MusicList";

export default function AlbumSection({ albumData }: { albumData: AlbumData }) {
  const { album, tracks } = albumData;

  return (
    <section>
      <header className={styles.header}>
        <div className={styles.albumImageContainer}>
          <Image
            src={album.cover_big}
            width={500}
            height={500}
            alt={album.title}
          />
        </div>
        <div className={styles.albumData}>
          <h1>{album.title}</h1>
          <p className={styles.nameAndYear}>
            <Link href={`/artista/${album.artist.id}`}>
              {album.artist.name}
            </Link>{" "}
            • {album.release_date.slice(0, 4)}
          </p>
          <button>
            <BiPlay />
            Play
          </button>
        </div>
      </header>
      <MusicList tracks={tracks.data} cover={album.cover_medium} />
    </section>
  );
}
