import { FiFile, FiGitBranch, FiStar } from "react-icons/fi";
import { Container, Proj } from "./styles";

export function Two() {
    return (
        <Container>
            <Proj>
                <h2> <FiFile size={20}/> my-onix </h2>

                <p>Consulte os códigos de erro que aparecem no painel do veículo Onix.</p>

                <span><FiStar  size={20}/> 100</span> <span><FiGitBranch  size={20}/> 100</span>
            </Proj>

            <Proj>
                <h2> <FiFile  size={20}/> my-onix </h2>

                <p>Consulte os códigos de erro que aparecem no painel do veículo Onix.</p>

                <span><FiStar  size={20}/> 100</span> <span><FiGitBranch  size={20}/> 100</span>
            </Proj>
        </Container>
    )
}