import topTracksGet from '@/actions/top-tracks-get';
import Error from '@/components/helper/Error';
import TopTracks from '@/components/music/TopTracks';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Vmusic | Músicas mais escutadas`,
  };
}

export default async function MusicasPage() {
  const topTracks = await topTracksGet();

  if (!topTracks) return <Error errorMessage="Erro ao buscar as músicas." />;
  return (
    <>
      <TopTracks topTracks={topTracks}></TopTracks>
    </>
  );
}
