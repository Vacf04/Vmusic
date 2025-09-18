"use client";
import { Artist } from "@/actions/top-artists-get";
import Image from "next/image";
import Link from "next/link";
import styles from "./ArtistCard.module.css";

export default function ArtistsCard({ artist }: { artist: Artist }) {
  return (
    <Link href={`/artista/${artist.id}`} className={styles.artistItem}>
      <div>
        <Image
          src={artist.picture_medium}
          width={500}
          height={500}
          alt={`${artist.name}`}
        />
      </div>
      <p>{artist.name}</p>
    </Link>
  );
}
