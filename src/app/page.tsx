import topArtistsGet from '@/actions/top-artists-get';
import topTracksGet from '@/actions/top-tracks-get';
import TopArtists from '@/components/artist/TopArtists';
import TopTracks from '@/components/music/TopTracks';

export default async function Home() {
  const topTracks = await topTracksGet();
  const topArtits = await topArtistsGet();

  if (!topTracks || !topArtits) return <p>Error</p>;
  return (
    <>
      <TopTracks topTracks={topTracks} />
      <TopArtists topArtists={topArtits}></TopArtists>
    </>
  );
}
