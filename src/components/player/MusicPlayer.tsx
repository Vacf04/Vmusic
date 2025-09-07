"use client";
import { useMusic } from "@/context/MusicContext";
import styles from "./MusicPlayer.module.css";
import { BiPause, BiPlay, BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MusicPlayer() {
  const audio = useRef<HTMLAudioElement | null>(null);
  const { music, playOrPauseMusic, isPlaying } = useMusic();

  if (!music) return null;
  return (
    <div className="musicPlayer">
      <audio src={music.preview} ref={audio} autoPlay />
      <div className={styles.player}>
        <div className={styles.mainData}>
          <Image
            src={music.album.cover_small}
            width={50}
            height={50}
            alt={`Capa do ${music.album.title}`}
          />
          <div>
            <p className={styles.title}>{music.title}</p>
            <Link
              href={`/artista/${music.artist.id}`}
              className={styles.artist}
            >
              {music.artist.name}
            </Link>
          </div>
        </div>
        <div className={styles.controls}>
          <div className={styles.mainControls}>
            <button>
              <BiSkipPrevious />
            </button>
            <button
              onClick={() => audio.current && playOrPauseMusic(audio.current)}
            >
              {isPlaying ? <BiPause /> : <BiPlay />}
            </button>
            <button>
              <BiSkipNext />
            </button>
          </div>
          <div className={styles.duration}>
            <p>{audio.current && Math.floor(audio.current.currentTime)}</p>
            <div className={styles.durationLine}></div>
            <p>00:30</p>
          </div>
        </div>
        <div className={styles.volume}></div>
      </div>
    </div>
  );
}
