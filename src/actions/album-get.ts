'use server';
import { Album } from './search-albuns-get';
import { Track } from './track-get';

export type AlbumData = {
  album: Album;
  tracks: {
    data: Track[];
  };
};

export default async function albumGet(id: string): Promise<AlbumData | null> {
  try {
    const responseAlbum = await fetch(`https://api.deezer.com/album/${id}`);
    const responseAlbumTracks = await fetch(
      `https://api.deezer.com/album/${id}/tracks`,
    );

    if (!responseAlbum.ok || !responseAlbumTracks.ok) {
      throw new Error('Não foi encontrado nenhum album.');
    }

    const album = await responseAlbum.json();
    const tracks = await responseAlbumTracks.json();

    return {
      album,
      tracks,
    };
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    }

    return null;
  }
}
