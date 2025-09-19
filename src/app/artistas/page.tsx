import topArtistsGet from '@/actions/top-artists-get';
import TopArtists from '@/components/artist/TopArtists';
import Error from '@/components/helper/Error';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Vmusic | Artistas mais escutados`,
  };
}

export default async function ArtistasPage() {
  const topArtits = await topArtistsGet();

  if (!topArtits) return <Error errorMessage="Erro ao buscar os artistas." />;
  return (
    <>
      <TopArtists topArtists={topArtits}></TopArtists>
    </>
  );
}
