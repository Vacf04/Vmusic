'use server';

export type Artist = {
  id: number;
  name: string;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  tracklist: string;
  position: number;
  nb_fan: number;
};

export default async function topArtistsGet(): Promise<Artist[] | null> {
  try {
    const response = await fetch(`https://api.deezer.com/chart/0/artists`);

    if (!response.ok) {
      throw new Error('Erro ao buscar os artistas.');
    }

    const artists = await response.json();
    return artists.data;
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    }

    return null;
  }
}
