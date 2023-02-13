const lyrics = 'Tor prema ta ondho holam ki dos dibi thata. Tora ami khuja barai sokal dupur rat a. Agun jala purlam ami . Dilam thata jap. Tor amr prema cilo ra bondhu cilo pura tai pap'
// const doesExist = lyrics.includes('dupur')
// console.log(doesExist)
const searchString ='Rat'
// const doesExist = lyrics.includes(searchString)
// console.log(doesExist)
const lyricsLower = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase();
// const doesExist =lyricsLower.includes(searchStringLower)

const doesExist =lyrics.toLowerCase().includes(searchString.toLowerCase())
console.log(doesExist)

// index 
console.log(lyrics.indexOf('dibi'))

if(lyrics.indexOf('Agun') !== 1){
    console.log('asa')
}
else{
    console.log('nai')
}

// startwith 
console.log(lyrics.startsWith('tor'))

// endwith 
console.log(lyrics.endsWith('himu'))