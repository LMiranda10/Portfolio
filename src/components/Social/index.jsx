import { Container } from "./styles";
import { FiBriefcase, FiGithub, FiGlobe, FiLinkedin, FiMail, FiMapPin, FiTwitter } from 'react-icons/fi'


export function Social() {
    return (
        <Container>
            <p> <FiMapPin size={24}/> Brasil</p>
            <p> <FiBriefcase size={24}/> RocketSeat</p>
            <p> <FiGithub size={24}/> Luan</p>
            <p> <FiLinkedin size={24}/> Luan Miranda</p>
            <p> <FiTwitter size={24}/> Luan.miranda</p>
            <p> <FiGlobe size={24}/> https://luan.dev</p>
            <p> <FiMail size={24}/> luan.miranda103@gmail.com</p>
        </Container>
    )
}