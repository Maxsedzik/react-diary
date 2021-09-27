import React from 'react'
import SingleNote from './SingleNote'
import { StyledNotesList } from './styles/NotesList.styled'

const NotesList = (props) => {
    return (
        <StyledNotesList>
        <h1>Your saved notes</h1>
        {props.notes.map(note => <SingleNote key={props.name} name={note.name} note={note.note} />)}
        </StyledNotesList>
    )
}

export default NotesList
