import topArtistsGet from '@/actions/top-artists-get';
import topTracksGet from '@/actions/top-tracks-get';
import ArtistsList from '@/components/artist/ArtistsList';
import TopTracks from '@/components/music/TopTracks';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Vmusic | Home`,
  };
}

export default async function Home() {
  const topTracks = await topTracksGet();
  const topArtits = await topArtistsGet();

  if (!topTracks || !topArtits) return <p>Error</p>;
  return (
    <>
      <TopTracks topTracks={topTracks} />
      <ArtistsList artists={topArtits} />
    </>
  );
}
