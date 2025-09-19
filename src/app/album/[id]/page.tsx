import albumGet from '@/actions/album-get';
import AlbumSection from '@/components/album/AlbumSection';
import Error from '@/components/helper/Error';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const albumData = await albumGet(id);

  return {
    title: albumData
      ? `Vmusic | ${albumData.album.title}`
      : 'Álbum não encontrado',
  };
}

export default async function AlbumPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const albumData = await albumGet(id);

  if (!albumData) return <Error errorMessage="Erro ao buscar o album." />;
  return (
    <>
      <AlbumSection albumData={albumData} />
    </>
  );
}
