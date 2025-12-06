import Competence from "../components/competence";
import Container from "../components/container";
import ContainerColumn from "../components/container-column";
import H2Title from "../components/title-h2";

const Home = () => {
    return (
        <><div>
            <h1>Page Home</h1>
        </div><Competence competenceName="test" competenceLevel="50%" barColor="progress-bar bg-success"/>
        <Container>
                <ContainerColumn>
                    <H2Title title="A propos" />
                </ContainerColumn>
                <ContainerColumn>
                    <H2Title title="Mes compétences" />
                </ContainerColumn>
            </Container>
            </>
    )
}

export default Home;