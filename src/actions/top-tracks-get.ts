'use server';
import { Track } from './track-get';

export default async function topTracksGet(): Promise<Track[] | null> {
  try {
    const response = await fetch(
      `https://api.deezer.com/playlist/3155776842/tracks`,
    );

    if (!response.ok) {
      throw new Error('Erro ao buscar as músicas.');
    }

    const tracks = await response.json();
    return tracks.data;
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    }

    return null;
  }
}
