import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ success, secretWord })=>{
    const [currentGuess, setCurrentGuess]= React.useState("");

    if (success){
        return <div data-test="component-input" />
    }
    return(
        <div data-test="component-input">
            <form className="form-inline">
                <input 
                    data-test="input-box"
                    className="mb-2 mx-sm=3"
                    type="text"
                    placeholder="enter guess"
                    value={currentGuess}
                    onChange={(event) => setCurrentGuess(event.target.value)}
                />
                <button 
                    data-test="submit-button"
                    className="btn btn-primary mb-2"
                    type="submit"
                    onClick={(event)=>{
                        event.preventDefault();
                        // TODO: update guessWord
                        // TODO: chech against secretWord and update success if needed.
                        setCurrentGuess("");
                    }}
                >
                    submit
                </button>
            </form>
        </div>
    )
}

Input.prototypes = {
    secretWord: PropTypes.string.isRequired,
}
export default Input;