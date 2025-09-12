'use server';
import { Album } from './search-albuns-get';
import { Artist } from './top-artists-get';
import { Track } from './track-get';

export type ArtistObject = {
  artist: Artist;
  topMusics: {
    data: Track[];
  };
  albuns: {
    data: Album[];
  };
};

export default async function artistGet(
  id: string,
): Promise<ArtistObject | null> {
  try {
    const responseArtist = await fetch(`https://api.deezer.com/artist/${id}`);
    const responseArtistTopMusics = await fetch(
      `https://api.deezer.com/artist/${id}/top`,
    );
    const responseArtistAlbuns = await fetch(
      `https://api.deezer.com/artist/${id}/albums`,
    );

    if (!responseArtist.ok || !responseArtistTopMusics.ok) {
      throw new Error('Não foi encontrado nenhum artista.');
    }

    const artist = await responseArtist.json();
    const topMusics = await responseArtistTopMusics.json();
    const albuns = await responseArtistAlbuns.json();
    return { artist, topMusics, albuns };
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    }

    return null;
  }
}
