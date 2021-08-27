import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../test/testUtils';
import Input  from './input';

// const defaultProps = {
//     guessedWord: [{guessedWord: 'train', letterMatchCount:3}]
// };

const setup = (success=false, secretWord='Party') => {
    
    return shallow(<Input success={success} secretWord={secretWord} />);
};

describe(' A. Render  ', ()=>{
    describe('sucess is true ',()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = setup(true);
        });
        test('Input -Render with error', () => {
            const component = findByTestAttr(wrapper,'component-input');
            expect(component.length).toBe(1);
        });

        test('input box does not show ', ()=>{
            const inputBox = findByTestAttr(wrapper,'input-box');
            expect(inputBox.exists()).toBe(false);
        });

        test('submit button does not show ', ()=>{
            const submitButton = findByTestAttr(wrapper,'submit-box');
            expect(submitButton.exists()).toBe(false);
        });
    });

    describe('sucess is false ',()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = setup(false);
        });
        test('1-Render with error', () => {
            const component = findByTestAttr(wrapper,'component-input');
            expect(component.length).toBe(1);
        });

        test('input box to show ', () => {
            const inputBox = findByTestAttr(wrapper,'input-box');
            expect(inputBox.exists()).toBe(true);
        });

        test('submit button to show ', () => {
            const submitButton = findByTestAttr(wrapper,'submit-button');
            expect(submitButton.exists()).toBe(true);
        });
    });
});

describe(' I. Estamos en Input ', ()=>{
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    });

    

    test('2. Does not throw warning with expected props', ()=>{
        checkProps(Input, {secretWord: 'Party'});
    });
});
// ----------------------------------------------------------------------- \\

describe(' II. state control field', () => {
    let mockSetCurrentGuess= jest.fn();
    let wrapper;
    let originalUseState;

    beforeEach(()=>{
        mockSetCurrentGuess.mockClear() ;
        originalUseState = React.useState;
        React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
        wrapper = setup();
    })
    afterEach(()=>{
        React.useState = originalUseState;
    })

    test('state updates with value of input box change ', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');
        // simulation the input box to get a value of train
        const mockEvent = { target: { value: 'train'}};
        inputBox.simulate("change", mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    });

    test('field is clear upon submit button click ', () => {
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        // Simulates a click event in a button
        submitButton.simulate('click', { preventDefault() {}});
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('');

    });
})