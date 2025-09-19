'use client';

import searchAlbunsGet, { Album } from '@/actions/search-albuns-get';
import searchArtistsGet from '@/actions/search-artists-get';
import searchTracksGet from '@/actions/search-tracks-get';
import { Artist } from '@/actions/top-artists-get';
import { Track } from '@/actions/track-get';
import useDebounce from '@/hooks/useDebounce';
import { useEffect, useState } from 'react';
import styles from './SearchInput.module.css';
import Loading from '../helper/Loading';
import AlbumList from '../album/AlbumList';
import ArtistsList from '../artist/ArtistsList';
import MusicList from '../music/MusicList';
import ErrorComponent from '../helper/Error';

export default function SearchInput() {
  const [searchQuery, setSearchQuery] = useState('');
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
      {isLoading && <Loading />}
      {error && (
        <p>
          <ErrorComponent errorMessage={error} />
        </p>
      )}
      {!isLoading && !error && tracks && artists && albuns && (
        <>
          <section className="showRight">
            {tracks.length <= 0 ? (
              <>
                <h1 className={styles.title}>Músicas</h1>
                <p>Nenhuma música encontrada.</p>
              </>
            ) : (
              <>
                <h1 className={styles.title}>Músicas</h1>
                <MusicList tracks={tracks} cover={null} />
              </>
            )}
          </section>
          {albuns.length <= 0 ? (
            <section className="showRight">
              <h1 className={styles.title}>Albuns</h1>
              <p>Nenhum album encontrado.</p>
            </section>
          ) : (
            <AlbumList albuns={albuns} />
          )}
          {artists.length <= 0 ? (
            <section className="showRight">
              <h1 className={styles.title}>Artistas</h1>
              <p>Nenhum artista encontrado.</p>
            </section>
          ) : (
            <ArtistsList artists={artists} />
          )}
        </>
      )}
    </>
  );
}
