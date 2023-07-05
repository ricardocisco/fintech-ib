import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow: hidden;
    }

    body {
        font-family: 'Poppins', sans-serif;
    }

    a {
        text-decoration: none;
        color: #333;
    }

    li {
        list-style: none;
    }
`;
