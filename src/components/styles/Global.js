import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        background-color: #000056;
        color: #f4f4f4;
        font-family: 'Overpass', sans-serif;
        margin: 0;
        padding: 0;
        font-size: 1.2rem;
        line-height: 1.6
    }
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    h1{
        text-align:center;
        padding: 1rem;
        font-size: 55px;
    }
`

export default GlobalStyles;