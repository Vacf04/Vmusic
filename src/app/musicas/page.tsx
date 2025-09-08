import topTracksGet from "@/actions/top-tracks-get";
import TopTracks from "@/components/home/TopTracks";

export default async function MusicasPage() {
  const topTracks = await topTracksGet();

  if (!topTracks) return <p>Error</p>;
  return (
    <>
      <TopTracks topTracks={topTracks}></TopTracks>
    </>
  );
}
