"use client";
import styles from "./HomeTracks.module.css";
import { Track } from "@/actions/track-get";

export default function HomeTracks({ musics }: { musics: Track[] }) {
  return (
    <section>
      <ul>
        {musics.map((music) => (
          <li key={music.id}>
            <h1>{music.title}</h1>
            <audio src={music.preview} controls></audio>
          </li>
        ))}
      </ul>
    </section>
  );
}
