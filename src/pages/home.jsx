import Competence from "../components/competence";
import Container from "../components/container";
import ContainerColumn from "../components/container-column";
import HeaderHP from "../components/header-hp";
import H2Title from "../components/title-h2";
import JohnDoeImage from "../assets/images/john-doe-about.jpg"

const Home = () => {
    return (
        <><div>
            <HeaderHP name="John Doe" job="Developpeur full stack" />
        </div>
        <Container>
                <ContainerColumn>
                    <H2Title title="A propos" />
                    <img src={JohnDoeImage} alt="Jonh Doe about" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Option, necessitatibus consecutor tempore perferendis nostum, ex delectus reiciendis impedit aut iure enim placeal? Natus neque at?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Option, necessitatibus consecutor tempore perferendis nostum, ex delectus reiciendis impedit aut iure enim placeal? Natus neque at?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Option, necessitatibus consecutor tempore perferendis nostum, ex delectus reiciendis impedit aut iure enim placeal? Natus neque at?</p>
                </ContainerColumn>
                <ContainerColumn>
                    <H2Title title="Mes compétences" />
                    <Competence competenceName="HTML" competenceLevel="90%" barColor="progress-bar bg-danger"/>
                    <Competence competenceName="CSS3" competenceLevel="80%" barColor="progress-bar bg-info"/>
                    <Competence competenceName="JAVASCRIPT" competenceLevel="70%" barColor="progress-bar bg-warning"/>
                    <Competence competenceName="PHP" competenceLevel="60%" barColor="progress-bar bg-success"/>
                    <Competence competenceName="REACT" competenceLevel="50%" barColor="progress-bar"/>
                </ContainerColumn>
            </Container>
            </>
    )
}

export default Home;