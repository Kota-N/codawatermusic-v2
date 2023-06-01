export type Song = {
    id: number;
    title: string;
    artist: string;
    mp3Url: string;
    wavUrl: string;
    imgUrl: string;
    genre: string;
    tags: string;
    description: string;
};

export type Pages = { [key: string]: { items: Song[][]; totalPage: number; }; };
export type SearchPages = { items: Song[][]; searchVal: string; totalPage: number; };

export type Store = {
    data: Song[];
    pages: Pages;
    isPlaying: boolean;
    playedSongId: number | null;
    playedSongUrl: string;
    playedSongData: Song | null;
    dlUrls: { mp3: string; wav: string; };
    searchPages: SearchPages;
    setIsPlaying: (isPlaying: boolean) => void;
    setPlayedSong: (id: number) => void;
    setDlUrls: (mp3: string, wav: string) => void;
    setSearchPages: (keywords: string[]) => void;
};

export const numPerPage = 12;