import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height:186px;

    display: flex;
    gap: 30px;
    margin-bottom:30px;
`

export const Proj = styled.div`
    width: 100%;
    height: 186px;
    border-radius: 20px;
    margin-bottom:30px;
    padding: 30px;

    background-color:${({theme})=>theme.COLORS.BACKGROUND_800};

    h2 {
        margin-bottom:20px;
    }

    p {
        margin-bottom:20px;
    }
`