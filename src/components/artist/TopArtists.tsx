'use client';
import { Artist } from '@/actions/top-artists-get';
import styles from './TopArtists.module.css';
import ArtistsList from './ArtistsList';

export default function TopArtists({ topArtists }: { topArtists: Artist[] }) {
  return (
    <section className={`${styles.topArtistsSection} showRight`}>
      <h1>Os artistas mais escutados</h1>
      <ArtistsList artists={topArtists} />
    </section>
  );
}
