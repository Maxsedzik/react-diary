import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    textarea{
        resize: none;
        border: 1px solid #1b1b1b;
        margin: 0 3rem;
    }

    input{
        border: 1px solid #1b1b1b;
        width: 250px;
        margin: 0 3rem;
    }

    label{
        margin: 0 3rem;
    }
    
    .btn{
        background-color: #1b1b1b;
        color: #f4f4f4;
        margin-top: 1rem;
        &:hover{
            cursor: pointer;
            background-color: #000
        }
    }

    #form-name{
        display: flex;
        flex-direction: column;
    }
    #form-note{
        display: flex;
        flex-direction: column;
    }
    .alertOk{
        
    }
` 