'use client';
import { Track } from '@/actions/track-get';
import Image from 'next/image';
import Link from 'next/link';
import styles from './MusicCard.module.css';
import { useMusic } from '@/context/MusicContext';

export default function MusicCard({
  track,
  cover = null,
  index,
  tracks,
}: {
  track: Track;
  cover: null | string;
  index: number;
  tracks: Track[];
}) {
  const { selectNextMusic, setTrackList, music } = useMusic();

  return (
    <li
      onClick={(e: React.MouseEvent<HTMLLIElement>) => {
        if (track.id === music?.id) return;
        if (!(e.target instanceof HTMLElement)) return;
        if (e.target.tagName === 'A') return;
        setTrackList({ tracks, cover });
        selectNextMusic(index);
      }}
      className={styles.musicItem}
    >
      <Image
        src={cover ? cover : track.album.cover_small}
        width={50}
        height={50}
        alt="Capa da música"
      />
      <div>
        <p className={styles.title}>
          {track.title.length >= 28
            ? `${track.title.slice(0, 27).trim()}...`
            : track.title}
        </p>
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
