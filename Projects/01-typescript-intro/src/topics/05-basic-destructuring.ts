interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string,
    year: number,
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Mess',
    details: {
        author: 'Lila',
        year: 0
    }
}

const song = 'New Song';

const { song: anotherSong, songDuration: duration, details } = audioPlayer;
const { author } = details;

console.log('Song: ', song );
console.log('Song: ', anotherSong );
console.log('Song: ', duration );
console.log('Author: ', author );


const [ p1, p2, trunks = ' Not Found' ]: string[] = ['Goku', 'Vegeta'];
console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', trunks);


export {};