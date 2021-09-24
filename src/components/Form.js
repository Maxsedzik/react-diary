import React from 'react'
import { StyledForm } from './styles/Form.styled'
import { useRef } from 'react';

const Form = ({onAddNote}) => {
    const nameInputRef = useRef();
    const noteInputRef = useRef();
    

    function submitHandle(e){
        e.preventDefault();
        
        const addedName = nameInputRef.current.value;
        const addedNote = noteInputRef.current.value;

        const newNote = {
            name: addedName,
            note: addedNote
        }
        
        onAddNote(newNote);
    }

    return (
        <StyledForm onSubmit={submitHandle}>
            <label htmlFor='name'>Name of your note</label>
            <input type='text' id='name' required ref={nameInputRef} />
            <label htmlFor='note'>Your note</label>
            <textarea cols='5' rows='5' id='note' required ref={noteInputRef} />
            <input type='submit' className='btn' value='Save a note'/>
        </StyledForm>
    )
}

export default Form
