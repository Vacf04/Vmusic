"use server";

import { Artist } from "./top-artists-get";

export default async function searchArtistsGet(
  query: string
): Promise<Artist[] | null> {
  try {
    const response = await fetch(
      `https://api.deezer.com/search/artist?q=${query}`
    );

    if (!response.ok) {
      throw new Error("Erro ao buscar artistas.");
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
