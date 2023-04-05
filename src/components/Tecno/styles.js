import styled from "styled-components";

export const Container = styled.div`
    width: 350px;
    height: auto;
    border-radius: 20px;
    margin-bottom:30px;
    padding: 32px;

    background-color:${({theme})=>theme.COLORS.BACKGROUND_800};
`

export const Techs = styled.div`
    display: grid;
    gap: 15px;
    margin-top:20px;

    grid-template-rows: 24px 24px 24px;
    grid-template-columns:86px 86px 86px;

    grid-template-areas: 
    "JS react node"
    "git github html"
    "css elixir reactn"
    ;

    >button {
        width: 86px;
        height: 24px;
        border-radius:30px;

        background-color:${({theme})=>theme.COLORS.BUTTON_COLOR};
        color: #000000;

        font-size:10px;
    }
`