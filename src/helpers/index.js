// export function getLetterMatchCount(guessedWord, secretWord) {
// };
    
    export const getLetterMatchCount = (guessedWord, secretWord)=>{
        const secretLetters = secretWord.split('');
        const guessLetterSet = new Set(guessedWord);
        return secretLetters.filter(letter => guessLetterSet.has(letter)).length;
    };