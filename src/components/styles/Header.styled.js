import styled from 'styled-components';

export const StyledHeader = styled.header`
    ul{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        padding: 20px 0;
    }
    a{
        font-size: 1.6rem;
        &:hover{
            border-bottom: 2px solid #f4f4f4;
        }
    }
`

