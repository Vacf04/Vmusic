"use client";
import { useMusic } from "@/context/MusicContext";
import styles from "./MusicPlayer.module.css";
import { BiPause, BiPlay, BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MusicPlayer() {
  const audio = useRef<HTMLAudioElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const { music, playOrPauseMusic, isPlaying, setIsPlaying } = useMusic();

  const secondsUpdate = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    setProgress(e.currentTarget.currentTime);
  };

  const handleLoaded = () => {
    if (audio.current) setTotalDuration(audio.current.duration);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audio.current) audio.current.currentTime = Number(e.target.value);
  };

  if (!music) return null;
  return (
    <div className="musicPlayer">
      <audio
        src={music.preview}
        ref={audio}
        onTimeUpdate={secondsUpdate}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onLoadedMetadata={handleLoaded}
        autoPlay
      />
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
            <p>{`00:${
              Math.floor(progress).toString().length === 1
                ? `0${Math.floor(progress)}`
                : Math.floor(progress)
            }`}</p>
            <input
              type="range"
              name="duration"
              id="duration"
              className={styles.durationLine}
              value={progress}
              min={0}
              onChange={handleTimeChange}
              max={totalDuration}
              style={
                {
                  "--timing": `${(progress / totalDuration) * 100}%`,
                } as React.CSSProperties
              }
            />
            <p>{`00:${
              Math.floor(totalDuration).toString().length === 1
                ? `0${Math.floor(totalDuration)}`
                : Math.floor(totalDuration)
            }`}</p>
          </div>
        </div>
        <div className={styles.volume}></div>
      </div>
    </div>
  );
}
