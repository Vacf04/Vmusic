"use server";

import { Track } from "./track-get";

export default async function searchTracksGet(
  query: string
): Promise<Track[] | null> {
  try {
    const response = await fetch(
      `https://api.deezer.com/search/track?q=${query}`
    );

    if (!response.ok) {
      throw new Error("Erro ao buscar musicas.");
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
