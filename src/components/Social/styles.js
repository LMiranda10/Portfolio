import styled from "styled-components";

export const Container = styled.div`
    width: 350px;
    height: auto;
    border-radius: 20px;
    margin-bottom:30px;
    padding: 32px;

    background-color:${({theme})=>theme.COLORS.BACKGROUND_800};
    
    display: flex;
    flex-direction:column;
    gap: 29px;
    text-align:center;

    > p {
        font-size:13px;
        gap:20px;

        display: flex;
        text-align:center;
    }
`