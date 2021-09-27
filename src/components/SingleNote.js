import React from 'react'
import { StyledSingleNote } from './styles/SingleNote.styled'

const SingleNote = (props) => {
    return (
        <StyledSingleNote>
            <li>
                <h3>{props.name}</h3>
                <p>{props.note}</p>
            </li>
        </StyledSingleNote>
    )
}

export default SingleNote
