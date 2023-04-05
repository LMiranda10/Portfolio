import styled from "styled-components";

export const Container = styled.div`
    width: 350px;
    height: 292px;
    border-radius: 20px;
    margin-bottom:30px;
    padding: 32px;

    text-align: center;

    background-color:${({theme})=>theme.COLORS.BACKGROUND_800};

    > img {
        width:128px;
        height: 128px;
        margin-bottom:30px;

        border-radius: 50%;
    }

    > h2 {
        margin-bottom: 10px;
    }
`