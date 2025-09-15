import albumGet from '@/actions/album-get';
import AlbumSection from '@/components/album/AlbumSection';

export default async function AlbumPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const albumData = await albumGet(id);

  if (!albumData) return <p>Error</p>;
  return (
    <>
      <AlbumSection albumData={albumData} />
    </>
  );
}
