"use server";
import { Track } from "./track-get";

export default async function topTracksGet(): Promise<Track[] | null> {
  try {
    const response = await fetch(`https://api.deezer.com/chart/0`);

    if (!response.ok) {
      throw new Error("Erro ao buscar as músicas.");
    }

    const tracks = await response.json();
    return tracks.tracks.data;
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    }

    return null;
  }
}
