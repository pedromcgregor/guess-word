import React from 'react';
import { mount } from 'enzyme';

import App from '../../App';

import  { findByTestAttr } from '../../test/testUtils';

/**
 * Create wrapper with specified initial condition.
 * then submit a guessed word of 'train'
 * @function
 * @param {object} state - initial condition
 * @return {wrapper} Enzyme rapper of mounted App component
 */
const setup = () => {
    // TODO: apply state
    const wrapper = mount(<App />);

    // add value to input box
    const inputBox = findByTestAttr(wrapper, 'input-box');
    inputBox.simulate('change', { target: {value: 'train'}});

    // simulate click on submite button
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', {preventDefault() {}});

    return wrapper;
};

describe('I. no words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessedWords: []
        });
    });

    test('create GuessedWords table with one roww', () => {
        const guessedWordRows = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordRows).toHaveLength(1);
    });
});

describe('II. some words guessed', () => {

});

describe('III. guess secret word', () => {

});