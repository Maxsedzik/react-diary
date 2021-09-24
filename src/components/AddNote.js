import React from 'react'
import { StyledBox } from './styles/Box.styled'
import Form from './Form'

const AddNote = () => {
    function onAddNoteHandler(newNote){
        fetch('https://react-diary-f86c1-default-rtdb.europe-west1.firebasedatabase.app/notes.json',{
            method: 'POST',
            body: JSON.stringify(newNote),
            headers:{
                'Content-type':'application/json'
            }
        })
    }

  return (
        <StyledBox>
            <Form onAddNote={onAddNoteHandler}/>
        </StyledBox>
    )
}

export default AddNote
