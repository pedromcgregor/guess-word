import React from 'react';
import PropTypes from 'prop-types';

const GuessedWord = (props) => {
    console.log('props ', props)
    let context;
    console.log('props Length ', props.guessWords.length)
    if (props.guessWords.length === 0){
        context = (
            <span data-test="guess-instructions">
                Try to Guess the secreate word
            </span>)
    } else {
        const guessedWordsRows = props.guessWords.map((word, index) => (
            <tr data-test="guessed-word" key={index}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        ));
        
        context = (
            <div data-test="guessed-words">
                <h3>Guessed Words</h3>
                <table className="table table-sm">
                    <thead className="thead-light">
                        <tr>
                            <th>Guess</th>
                            <th>Matching Letters</th>
                        </tr>
                    </thead>
                    <tbody>
                        { guessedWordsRows}
                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <div data-test="component-guessed-word" >
            {context}
        </div>
    );
};

GuessedWord.prototype = {
    guessedWord: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired,
};

export default GuessedWord;