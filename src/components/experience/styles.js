import styled from "styled-components";

export const Container = styled.div`
    width: 350px;
    height: auto;
    border-radius: 20px;
    margin-bottom:30px;
    padding: 32px;

    background-color:${({theme})=>theme.COLORS.BACKGROUND_800};

    > ul {
        margin:20px auto 10px 40px;

        > li {
        margin-bottom:20px;
        }
    }
`