import topArtistsGet from "@/actions/top-artists-get";
import topTracksGet from "@/actions/top-tracks-get";
import ArtistsList from "@/components/artist/ArtistsList";
import TopTracks from "@/components/music/TopTracks";
import styles from "./page.module.css";

export default async function Home() {
  const topTracks = await topTracksGet();
  const topArtits = await topArtistsGet();

  if (!topTracks || !topArtits) return <p>Error</p>;
  return (
    <>
      <TopTracks topTracks={topTracks} />
      <section>
        <h1 className={styles.topArtists}>Os artistas mais escutados</h1>
        <ArtistsList artists={topArtits} />
      </section>
    </>
  );
}
