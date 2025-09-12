import artistGet from '@/actions/artist-get';
import ArtistSection from '@/components/artist/ArtistSection';

export default async function ArtistaPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const artistData = await artistGet(id);

  if (!artistData) return <p>Error</p>;
  return (
    <>
      <ArtistSection artistData={artistData} />
    </>
  );
}
