import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 201px;
    border-radius: 20px;
    margin-bottom:30px;
    padding: 30px;

    background-color:${({theme})=>theme.COLORS.BACKGROUND_800};

    display: flex;
    gap: 20px;

    img {
        border-radius:50%;

        width: 128px;
        height: 128px;
    }
`

export const Posttext = styled.div`
    h2 {
        font-size:18px;
        font-weight:700;
    }

    p {
        margin: 28px 0 11px;
    }

    > div {
        display: flex;
        gap: 10px;
    }
`