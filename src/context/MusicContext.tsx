'use client';
import { Track } from '@/actions/track-get';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

export type MusicContextProps = {
  music: Track | null;
  setMusic: React.Dispatch<React.SetStateAction<Track | null>>;
  cover: string | null;
  setCover: React.Dispatch<React.SetStateAction<string | null>>;
  playOrPauseMusic: (audio: HTMLAudioElement) => void;
  skipMusic: () => void;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  selectNextMusic: (index: number) => void;
  setTrackList: React.Dispatch<
    React.SetStateAction<{
      tracks: Track[] | null;
      cover: string | null;
    }>
  >;
  lastMusic: () => void;
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
  const [actualIndex, setActualIndex] = useState(-1);
  const [trackList, setTrackList] = useState<{
    tracks: Track[] | null;
    cover: string | null;
  }>({ tracks: null, cover: null });

  const playOrPauseMusic = (audio: HTMLAudioElement) => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  const lastMusic = () => {
    if (trackList.tracks)
      if (actualIndex === 0) {
        setActualIndex(trackList.tracks.length - 1);
      } else {
        setActualIndex(actualIndex - 1);
      }
  };

  const skipMusic = () => {
    if (trackList.tracks)
      if (actualIndex === trackList.tracks?.length - 1) {
        setActualIndex(0);
      } else {
        setActualIndex(actualIndex + 1);
      }
    else {
      setActualIndex(0);
    }
  };

  const selectNextMusic = (index: number) => {
    setActualIndex(index);
  };

  useEffect(() => {
    if (trackList.tracks && actualIndex !== -1) {
      setMusic(trackList.tracks[actualIndex]);
      setCover(
        trackList.cover
          ? trackList.cover
          : trackList.tracks[actualIndex].album.cover_medium,
      );
    }
  }, [actualIndex]);

  useEffect(() => {
    setActualIndex(-1);
  }, [trackList]);

  return (
    <MusicContext.Provider
      value={{
        music,
        setMusic,
        setTrackList,
        selectNextMusic,
        cover,
        setCover,
        playOrPauseMusic,
        skipMusic,
        lastMusic,
        isPlaying,
        setIsPlaying,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
