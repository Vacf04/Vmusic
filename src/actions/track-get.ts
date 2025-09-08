"use server";

import { Album } from "./search-albuns-get";
import { Artist } from "./top-artists-get";

export type Track = {
  id: number;
  title: string;
  link: string;
  duration: number;
  release_date: string;
  preview: string;
  album: Album;
  artist: Artist;
};

export default async function trackGet(
  trackCode: string
): Promise<Track | null> {
  try {
    const response = await fetch(`https://api.deezer.com/track/${trackCode}`);

    if (!response.ok) {
      throw new Error("Erro ao buscar a musicas.");
    }

    const music = await response.json();
    return music;
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    }

    return null;
  }
}
