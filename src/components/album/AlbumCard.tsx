'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './AlbumCard.module.css';
import { Album } from '@/actions/search-albuns-get';

export default function AlbumCard({ album }: { album: Album }) {
  return (
    <li>
      <Link href={`/album/${album.id}`} className={styles.albumItem}>
        <div>
          <Image
            src={album.cover_medium}
            width={1000}
            height={1000}
            alt={`${album.title}`}
          />
        </div>
        <p>{album.title}</p>
      </Link>
    </li>
  );
}
