'use client';
import { Artist } from '@/actions/top-artists-get';
import ArtistsCard from './ArtistCard';
import SwiperCarousel from '../carousel/SwiperCarousel';

export default function ArtistsList({ artists }: { artists: Artist[] }) {
  const renderArtistItem = (artist: Artist) => <ArtistsCard artist={artist} />;

  return (
    <SwiperCarousel
      title="Artistas"
      items={artists}
      renderItem={renderArtistItem}
    />
  );
}
