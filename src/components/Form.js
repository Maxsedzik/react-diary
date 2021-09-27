import React from 'react'
import { StyledForm } from './styles/Form.styled'
import { useRef, useState } from 'react';
import { StyledAlertOk } from './styles/AlertOk.styled';

const Form = ({onAddNote}) => {
    const nameInputRef = useRef();
    const noteInputRef = useRef();
    const [added, setAdded] = useState(false);

    function submitHandle(e){
        e.preventDefault();
        
        const addedName = nameInputRef.current.value;
        const addedNote = noteInputRef.current.value;

        const newNote = {
            name: addedName,
            note: addedNote
        }
        
        onAddNote(newNote);
        nameInputRef.current.value= '';
        noteInputRef.current.value= '';
        
        setAdded(true);
        setTimeout(() => {
            setAdded(false)
        }, 3000)
    }
    if (added) {
        return(
                <StyledAlertOk>
                    <h3>SUCCESS!</h3>
                    <p>Your note is added</p>
                </StyledAlertOk>
        )
    }
    return (
            <StyledForm onSubmit={submitHandle}>
                <h1>Add new note</h1>
                <div id='form-name'>
                    <label htmlFor='name'>Name of your note</label>
                    <input type='text' id='name' required ref={nameInputRef} />
                </div>
                <div id='form-note'>
                    <label htmlFor='note'>Your note</label>
                    <textarea cols='5' rows='10' id='note' required ref={noteInputRef} />
                    <input type='submit' className='btn' value='Save a note'/>
                </div>
            </StyledForm>
    )
}

export default Form
