import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    textarea{
        resize: none;
        border: 1px solid #1b1b1b;
    }
    input{
        border: 1px solid #1b1b1b;
        width: 250px;
    }
    
    .btn{
        background-color: #1b1b1b;
        color: #f4f4f4;
        &:hover{
            cursor: pointer;
            background-color: #000
        }
    }

` 