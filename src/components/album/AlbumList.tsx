'use client';
import { Album } from '@/actions/search-albuns-get';
import Image from 'next/image';
import Link from 'next/link';
import styles from './AlbumList.module.css';
import SwiperCarousel from '../carousel/SwiperCarousel';

export default function AlbumList({ albuns }: { albuns: Album[] }) {
  const renderAlbumItem = (album: Album) => (
    <Link href={`/album/${album.id}`} className={styles.albumItem}>
      <div>
        <Image
          src={album.cover_medium}
          width={500}
          height={500}
          alt={`${album.title}`}
        />
      </div>
      <p>
        {album.title.length >= 28
          ? `${album.title.slice(0, 27).trim()}...`
          : album.title}
      </p>
    </Link>
  );

  return (
    <SwiperCarousel
      title="Albuns"
      items={albuns}
      renderItem={renderAlbumItem}
    />
  );
}
