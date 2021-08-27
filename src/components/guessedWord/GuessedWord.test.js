import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../test/testUtils';
import GuessedWord  from './GuessedWord';

const defaultProps = {
    guessedWord: [{guessedWord: 'train', letterMatchCount: 3 }]
};

const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<GuessedWord {...setupProps} />)
};

test('does not throw warning with expected props', () => {
    checkProps(GuessWord, defaultProps)
});

describe(' I. There are no words guessed ', () =>{
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWord: []});
    });

    test('1-Render with error', () => {
        const component = findByTestAttr(wrapper,'component-guessed-word');
        expect(component.length).toBe(1);
    });

    test('2-Render instructions to guess a word ', () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0);
    });
});

describe(' II. If there are word guesses ', () =>{
   
    let wrapper;
    const guessedWords = [
        {guessedWord:'train', letterMatchCount:3},
        {guessedWord:'agile', letterMatchCount:1},
        {guessedWord:'party', letterMatchCount:5}
    ];
    
    beforeEach(() => {
        wrapper = setup({ guessedWords});
        console.log(wrapper.debug());
    });

    test('1. render with out error', () => {
        const component = findByTestAttr(wrapper,'component-guessed-word');
        expect(component.length).toBe(1);
    });

    test('2. renders "Guessed word" section.', () => {
        const guessedWordNode = findByTestAttr(wrapper,'guessed-words');
        expect(guessedWordNode.length).toBe(1);
    });
    
    test('3. Correct number of guessed words.', () => {
        const guessedWordNodes = findByTestAttr(wrapper,'guessed-word');
        console.log('Node Length ', guessedWordNodes.length)
        console.log('Length ', guessedWords.length)
        expect(guessedWordNodes.length).toBe(guessedWords.length);
    });
});