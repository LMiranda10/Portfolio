import { Avatar } from "../components/Avatar";
import { Social } from "../components/Social";
import { Tecno } from "../components/Tecno";
import { Two } from "../components/Two";
import { Educ } from "../components/education";
import { Exp } from "../components/experience";
import { Post } from "../components/post";
import { Container, Profile, Projects, Myproject } from "./styles";
Social

Avatar


export function Home() {
    return (
        <Container>
            <Profile>
                
                <Avatar/>

                <Social/>

                <Tecno/>

                <Exp/>

                <Educ/>

            </Profile>

            <Projects>
                <Myproject>
                    <h1>My Projects</h1>

                    <span>Veja todos</span>
                </Myproject>

                <Two/>

                <Myproject>
                    <h1>Recent Post</h1>
                </Myproject>

                <Post/>
            </Projects>
         </Container>
    )
}