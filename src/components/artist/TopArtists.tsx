'use client';
import { Artist } from '@/actions/top-artists-get';
import styles from './TopArtists.module.css';
import ArtistsCard from './ArtistCard';

export default function TopArtists({ topArtists }: { topArtists: Artist[] }) {
  return (
    <section className={`${styles.topArtistsSection} showRight`}>
      <h1>Artistas mais escutados</h1>
      <ul className={styles.grid}>
        {topArtists.map((artist) => (
          <li key={artist.id}>
            <ArtistsCard artist={artist} />
          </li>
        ))}
      </ul>
    </section>
  );
}
