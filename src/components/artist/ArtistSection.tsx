'use client';
import styles from './ArtistSection.module.css';
import Image from 'next/image';
import { BiPlay } from 'react-icons/bi';
import { ArtistObject } from '@/actions/artist-get';
import AlbumList from '../album/AlbumList';
import MusicList from '../music/MusicList';
import { useMusic } from '@/context/MusicContext';

export default function ArtistSection({
  artistData,
}: {
  artistData: ArtistObject;
}) {
  const { artist, topMusics, albuns } = artistData;
  const { selectNextMusic } = useMusic();

  const formatFansNumber = (nb_fan: number): string => {
    if (nb_fan >= 1000000000) {
      return `${(nb_fan / 1000000000).toFixed(0)}B`;
    }
    if (nb_fan >= 1000000) {
      return `${(nb_fan / 1000000).toFixed(0)}M`;
    }
    if (nb_fan >= 1000) {
      return `${(nb_fan / 1000).toFixed(0)}K`;
    }
    return nb_fan.toString();
  };

  return (
    <section className="showRight">
      <header className={styles.header}>
        <div className={styles.artistImageContainer}>
          <Image
            src={artist.picture_big}
            width={500}
            height={500}
            alt={artist.name}
          />
        </div>
        <div className={styles.artistData}>
          <h1>{artist.name}</h1>
          <p className={styles.fans}>{formatFansNumber(artist.nb_fan)} Fãs</p>
          <button
            onClick={() => {
              selectNextMusic(0);
            }}
          >
            <BiPlay />
            Play
          </button>
        </div>
      </header>
      <div className={styles.topSongs}>
        <h1>Mais Escutadas</h1>
        <MusicList tracks={topMusics.data} cover={null} />
      </div>
      <div className={styles.albuns}>
        <h1>Albuns</h1>
        <AlbumList albuns={albuns.data} />
      </div>
    </section>
  );
}
