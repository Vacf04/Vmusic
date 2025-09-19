import artistGet from '@/actions/artist-get';
import ArtistSection from '@/components/artist/ArtistSection';
import Error from '@/components/helper/Error';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const artistData = await artistGet(id);

  return {
    title: artistData
      ? `Vmusic | ${artistData.artist.name}`
      : 'Álbum não encontrado',
  };
}

export default async function ArtistaPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const artistData = await artistGet(id);

  if (!artistData) return <Error errorMessage="Erro ao buscar o artista." />;
  return (
    <>
      <ArtistSection artistData={artistData} />
    </>
  );
}
