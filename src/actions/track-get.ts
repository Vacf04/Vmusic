'use server'

export type Track = {
    id: number;
    title: string;
    link: string;
    duration: number;
    release_date: string;
    preview: string;
    album: {
          id: number,
          title: string,
          cover: string,
          cover_small: string,
          cover_medium: string,
          cover_big: string,
          cover_xl: string,
      };
}

export default async function trackGet(trackCode: string): Promise<Track | null>{
    try {
        const response = await fetch(`https://api.deezer.com/track/${trackCode}`);
        
        if(!response.ok) {
            throw new Error('Erro ao buscar a música.');
        }

        const music = await response.json();
        return music;
    } catch(e: unknown) {
        if(e instanceof Error) {
            console.error(e.message);
        }
        
        return null;
    }
}
