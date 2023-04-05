import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    
    display:grid;
    grid-template-columns: 400px auto ;
    grid-template-areas:
    "profile content"
    ;
`;

export const Profile = styled.div`
    padding: 40px;
    grid-area: profile;
    height:100%;
`;

export const Projects = styled.div`
    padding: 40px;
    grid-area:content;
    height: 100%;
`

/////////////////////////////////////

export const Myproject = styled.div`
    width: 100%;
    height:86px;
    margin-bottom:40px;

    border-radius:20px;
    background-color:${({theme})=>theme.COLORS.BACKGROUND_800};

    display: flex;
    justify-content:space-between;
    text-align:center;
    align-items:center;

    padding: 30px;
`