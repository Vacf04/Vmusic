"use client";
import { Artist } from "@/actions/top-artists-get";
import ArtistCard from "../artist/ArtistCard";
import styles from "./TopArtists.module.css";

export default function TopArtists({ topArtists }: { topArtists: Artist[] }) {
  return (
    <section className={styles.topArtistsSection}>
      <h1>Os artistas mais escutados</h1>
      <ul className={styles.topArtists}>
        {topArtists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </ul>
    </section>
  );
}
