"use client";

import searchAlbunsGet, { Album } from "@/actions/search-albuns-get";
import searchArtistsGet from "@/actions/search-artists-get";
import searchTracksGet from "@/actions/search-tracks-get";
import { Artist } from "@/actions/top-artists-get";
import { Track } from "@/actions/track-get";
import useDebounce from "@/hooks/useDebounce";
import { useEffect, useState } from "react";
import MusicCard from "../music/MusicCard";
import ArtistCard from "../artist/ArtistCard";
import styles from "./SearchInput.module.css";
import Loading from "../helper/Loading";

export default function SearchInput() {
  const [searchQuery, setSearchQuery] = useState("");
  const [tracks, setTracks] = useState<Track[] | null>(null);
  const [artists, setArtists] = useState<Artist[] | null>(null);
  const [albuns, setAlbuns] = useState<Album[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedSearchTerm = useDebounce(searchQuery, 300);

  useEffect(() => {
    async function search() {
      setTracks(null);
      setArtists(null);
      setAlbuns(null);
      setError(null);

      if (debouncedSearchTerm.trim().length === 0) {
        return;
      }

      setIsLoading(true);

      try {
        const [tracks, artists, albuns] = await Promise.all([
          searchTracksGet(debouncedSearchTerm),
          searchArtistsGet(debouncedSearchTerm),
          searchAlbunsGet(debouncedSearchTerm),
        ]);

        setTracks(tracks);
        setArtists(artists);
        setAlbuns(albuns);
      } catch (e: unknown) {
        if (e instanceof Error) setError(e.message);
      } finally {
        setIsLoading(false);
      }
    }

    search();
  }, [debouncedSearchTerm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const preventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={preventSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="O que você quer ouvir ?"
          value={searchQuery}
          onChange={handleInputChange}
          className={styles.input}
        />
      </form>

      <section className={styles.results}>
        {isLoading && <Loading />}
        {error && <p>{error}</p>}
        {!isLoading && !error && tracks && artists && albuns && (
          <>
            <h1>Músicas</h1>
            <ul>
              {tracks.length <= 0 && <li>Nenhuma música encontrada.</li>}
              {tracks?.map((track) => (
                <MusicCard key={track.id} track={track} />
              ))}
            </ul>
            {albuns?.map((album) => (
              <p key={album.id}>{album.title}</p>
            ))}
            <h1>Artistas</h1>
            <ul>
              {artists.length <= 0 && <li>Nenhuma artista encontrado.</li>}
              {artists?.map((artist) => (
                <ArtistCard key={artist.id} artist={artist} />
              ))}
            </ul>
          </>
        )}
      </section>
    </>
  );
}
