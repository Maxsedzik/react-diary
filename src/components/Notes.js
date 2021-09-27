import React from 'react'
import NotesList from './NotesList'
import { StyledBox} from './styles/Box.styled'
import {useState, useEffect} from 'react'

const Notes = (props) => {
    const [notesAreLoading, setNotesAreLoading] = useState(true);
    const [notesLoaded, setNotesLoaded] = useState([])

    useEffect(() => {
        fetch('https://react-diary-f86c1-default-rtdb.europe-west1.firebasedatabase.app/notes.json').then(response =>  {
        return response.json();
    }).then(data => {
        const notes = [];

        for (const key in data){
            const note = {
                id:key,
                ...data[key]
            };

            notes.unshift(note)
        }

     setNotesAreLoading(false);
     setNotesLoaded(notes);   
    });
    }, [])
    
   

    if(notesAreLoading){
        return(
            <p style={{textAlign:'center'}}>Wait a second</p>
        )
    }

    if(notesLoaded.length === 0){
        return(
            <>
                <h1>:(</h1>
                <h3 style={{textAlign:'center'}}>You have not saved any notes yet</h3>
            </>
        )
    }
    return (
       <StyledBox>
           <NotesList notes={notesLoaded} />
       </StyledBox>
    )
}

export default Notes
