'use client';
import { useMusic } from '@/context/MusicContext';
import styles from './MusicPlayer.module.css';
import {
  BiPause,
  BiPlay,
  BiSkipNext,
  BiSkipPrevious,
  BiVolumeFull,
  BiVolumeLow,
  BiVolumeMute,
} from 'react-icons/bi';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MusicPlayer() {
  const audio = useRef<HTMLAudioElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [volume, setVolume] = useState(100);
  const { music, cover, playOrPauseMusic, isPlaying, setIsPlaying } =
    useMusic();

  const secondsUpdate = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    setProgress(e.currentTarget.currentTime);
  };

  const volumeUpdate = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    setVolume(e.currentTarget.volume * 100);
  };

  const handleLoaded = () => {
    if (audio.current) setTotalDuration(audio.current.duration);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audio.current) audio.current.currentTime = Number(e.target.value);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audio.current) audio.current.volume = Number(e.target.value) / 100;
  };

  if (!music || !cover) return null;
  return (
    <div className="musicPlayer">
      <audio
        src={music.preview}
        ref={audio}
        onTimeUpdate={secondsUpdate}
        onVolumeChange={volumeUpdate}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onLoadedMetadata={handleLoaded}
        autoPlay
      />
      <div className={styles.player}>
        <div className={styles.mainData}>
          <Image src={cover} width={50} height={50} alt={`Capa da música`} />
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
              style={
                {
                  '--timing': `${(progress / totalDuration) * 100}%`,
                } as React.CSSProperties
              }
              type="range"
              name="duration"
              id="duration"
              className={styles.durationLine}
              value={progress}
              min={0}
              max={Math.floor(totalDuration)}
              onChange={handleTimeChange}
            />
            <p>{`00:${
              Math.floor(totalDuration).toString().length === 1
                ? `0${Math.floor(totalDuration)}`
                : Math.floor(totalDuration)
            }`}</p>
          </div>
        </div>
        <div className={styles.volume}>
          {volume >= 50 && <BiVolumeFull />}
          {volume < 50 && volume >= 1 && <BiVolumeLow />}
          {volume < 1 && <BiVolumeMute />}
          <input
            type="range"
            name="duration"
            id="duration"
            className={styles.volumeLine}
            min={0}
            value={volume}
            onChange={handleVolumeChange}
            max={100}
            style={
              {
                '--timing': `${volume}%`,
              } as React.CSSProperties
            }
          />
        </div>
      </div>
    </div>
  );
}
