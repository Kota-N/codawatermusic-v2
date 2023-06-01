import { create } from 'zustand';
import data from './assets/data.json';
import { Pages, SearchPages, Store, numPerPage } from './types';

const pages: Pages = {
    all: { items: [], totalPage: 0 },
    piano: { items: [], totalPage: 0 },
    electronic: { items: [], totalPage: 0 },
    cinematic: { items: [], totalPage: 0 },
    corporate: { items: [], totalPage: 0 },
    acoustic: { items: [], totalPage: 0 },
    rock: { items: [], totalPage: 0 },
    pop: { items: [], totalPage: 0 },
    'game/8bit': { items: [], totalPage: 0 },
};

const buildGenrePages = (numPerPage: number): void => {
    const dataRev = data.slice().reverse();
    for (const item of dataRev) {
        const genre = item.genre.toLowerCase();
        // Create pages for all items
        const { items: allItems, totalPage: allTotalPage } = pages['all'];
        !allItems[allTotalPage] && allItems.push([]);
        allItems[allTotalPage].push(item);
        allItems[allTotalPage].length === numPerPage && pages['all'].totalPage++;
        // Create pages for each genre
        const { items, totalPage } = pages[genre];
        !items[totalPage] && items.push([]);
        items[totalPage].push(item);
        items[totalPage].length === numPerPage && pages[genre].totalPage++;
    }
    for (const genre of Object.keys(pages)) pages[genre].totalPage = pages[genre].items.length;
};

buildGenrePages(numPerPage);

const buildSearchPages = (keywords: string[]): SearchPages => {
    const output: SearchPages = {
        items: [[]],
        searchVal: keywords.join('-'),
        totalPage: 0,
    };

    let dataRev = data.slice().reverse();
    for (const word of keywords) {
        dataRev = dataRev.filter(
            song =>
                song.title
                    .toLowerCase()
                    .includes(word.toLowerCase()) ||
                song.genre
                    .toLowerCase()
                    .includes(word.toLowerCase()) ||
                song.artist
                    .toLowerCase()
                    .includes(word.toLowerCase()) ||
                song.tags
                    .toLowerCase()
                    .includes(word.toLowerCase())
        );
    }

    const { items } = output;
    let idx = 0;
    for (const item of dataRev) {
        !items[idx] && items.push([]);
        items[idx].push(item);
        items[idx].length === numPerPage && idx++;
    }
    output.totalPage = items.length;

    return output;
};

const useStore = create<Store>(set => ({
    data,
    pages,
    isPlaying: false,
    playedSongId: null,
    playedSongUrl: '',
    playedSongData: null,
    dlUrls: { mp3: '', wav: '' },
    searchPages: { items: [[]], searchVal: '', totalPage: 0 },
    setIsPlaying: isPlaying => set({ isPlaying }),
    setPlayedSong: id => set({
        playedSongId: id,
        playedSongUrl: data[id].mp3Url,
        playedSongData: data[id],
    }),
    setDlUrls: (mp3, wav) => set({ dlUrls: { mp3, wav } }),
    setSearchPages: keywords => set({ searchPages: buildSearchPages(keywords) }),
}));

export default useStore;