'use client';
import { Track } from '@/actions/track-get';
import { createContext, ReactNode, useContext, useState } from 'react';

export type MusicContextProps = {
  music: Track | null;
  setMusic: React.Dispatch<React.SetStateAction<Track | null>>;
  cover: string | null;
  setCover: React.Dispatch<React.SetStateAction<string | null>>;
  playOrPauseMusic: (audio: HTMLAudioElement) => void;
  skipMusic: () => void;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MusicContext = createContext<MusicContextProps | null>(null);

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (context === null) {
    throw new Error('useContext must be used inside a Provider');
  }
  return context;
};

export const MusicProvider = ({ children }: { children: ReactNode }) => {
  const [music, setMusic] = useState<Track | null>(null);
  const [cover, setCover] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playOrPauseMusic = (audio: HTMLAudioElement) => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };
  const skipMusic = () => {};

  return (
    <MusicContext.Provider
      value={{
        music,
        setMusic,
        cover,
        setCover,
        playOrPauseMusic,
        skipMusic,
        isPlaying,
        setIsPlaying,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
