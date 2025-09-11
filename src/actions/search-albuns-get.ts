'use server';

import { Artist } from './top-artists-get';

export type Album = {
  id: number;
  title: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  artist: Artist;
  release_date: string;
  label: string;
};

export default async function searchAlbunsGet(
  query: string,
): Promise<Album[] | null> {
  try {
    const response = await fetch(
      `https://api.deezer.com/search/album?q=${query}`,
    );

    if (!response.ok) {
      throw new Error('Erro ao buscar albuns.');
    }

    const album = await response.json();
    return album.data;
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    }
    return null;
  }
}
