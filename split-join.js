const lyrics = 'Tor prema ta ondho holam ki dos dibi thata. Tora ami khuja barai sokal dupur rat a. Agun jala purlam ami . Dilam thata jap. Tor amr prema cilo ra bondhu cilo pura tai pap'
// console.log(lyrics)
const parts = lyrics.split(' ')
// console.log(parts)
const sentences = lyrics.split('.')
// console.log(sentences)
const characters = lyrics.split('')
// console.log(characters)

// slice 
const partial = lyrics.slice(4, 8)
// console.log(partial)
const partial2 = lyrics.substring(4, 8)
// console.log(partial2)

// join
const lines =[
    'Tor prema ta ondho holam ki dos dibi thata',
    'Tora ami khuja barai sokal dupur rat a',
    'Agun jala purlam ami ',
    'Dilam thata jap',
    'Tor amr prema cilo ra bondhu cilo pura tai pap'
  ]
  const newSong = lines.join('; ')
  console.log(newSong)