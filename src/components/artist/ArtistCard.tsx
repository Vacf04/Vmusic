"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./ArtistCard.module.css";
import { Artist } from "@/actions/top-artists-get";

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <li>
      <Link href={`/artista/${artist.id}`} className={styles.artistItem}>
        <div>
          <Image
            src={artist.picture_medium}
            width={1000}
            height={1000}
            alt={`${artist.name}`}
          />
        </div>
        <p>{artist.name}</p>
      </Link>
    </li>
  );
}
