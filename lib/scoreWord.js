import scoreLetter from './scoreLetter';

module.exports = (word, multiplier) => {
    if (word === '' || typeof word !== 'string') { return 0 }
    let wordArray = word.trim().toUpperCase().split('');
    let wordScore = 0;
    for (var i=0; i<wordArray.length; i++) {
      wordScore = wordScore + scoreLetter(wordArray[i])
    };
    if (!isNaN(multiplier)) { return wordScore * multiplier };
    if (!multiplier) { return wordScore };
}
