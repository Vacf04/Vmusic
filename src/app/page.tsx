import tracksHomeGet from "@/actions/tracks-home-get";
import HomeTracks from "@/components/home/HomeTracks";

export default async function Home() {
  const musics = await tracksHomeGet();

  if (!musics) return <p>Error</p>;
  return <HomeTracks musics={musics} />;
}
