"use client";
import { Artist } from "@/actions/top-artists-get";
import Image from "next/image";

export default function TopArtists({ topArtists }: { topArtists: Artist[] }) {
  return (
    <section>
      <ul>
        {topArtists.map((artist) => (
          <li key={artist.id}>
            <h1>{artist.name}</h1>
            <Image
              src={artist.picture_big}
              width={250}
              height={250}
              alt={artist.name}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
