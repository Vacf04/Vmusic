import topArtistsGet from '@/actions/top-artists-get';
import TopArtists from '@/components/artist/TopArtists';

export default async function ArtistasPage() {
  const topArtits = await topArtistsGet();

  if (!topArtits) return <p>Error</p>;
  return (
    <>
      <TopArtists topArtists={topArtits}></TopArtists>
    </>
  );
}
