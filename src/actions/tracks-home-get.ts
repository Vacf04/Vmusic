'use server'
import { Track } from "./track-get";

export default async function tracksHomeGet(): Promise<Track[] | null>{
    try {
        const response = await fetch(`https://api.deezer.com/playlist/3155776842`);
        
        if(!response.ok) {
            throw new Error('Erro ao buscar as músicas.');
        }

        const playlist = await response.json();
        return playlist.tracks.data;
    } catch(e: unknown) {
        if(e instanceof Error) {
            console.error(e.message);
        }
        
        return null;
    }
}
