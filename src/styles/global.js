import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({theme})=>theme.COLORS.BACKGROUND_900};;
        color: ${({theme})=>theme.COLORS.FONT_COLOR};

        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Merriweather Sans', sans-serif;
        font-size: 16px;
        outline: none;
    }

    h1 {
        font-size: 20px;
    }

    svg {
        color: ${({theme})=>theme.COLORS.FONT_COLOR}
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);

    }
`