"use client";
import { Track } from "@/actions/track-get";
import Image from "next/image";

export default function TopTracks({ topTracks }: { topTracks: Track[] }) {
  console.log(topTracks);
  return (
    <section>
      <ul>
        {topTracks.map((track) => (
          <li key={track.id}>
            <h1>{track.title}</h1>
            <Image
              src={track.album.cover_big}
              width={250}
              height={250}
              alt={track.album.title}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
