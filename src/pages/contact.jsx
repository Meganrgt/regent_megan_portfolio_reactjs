import H2Title from "../components/title-h2";
import H1Title from "../components/page-title";
import Container from "../components/container";
import ContainerColumn from "../components/container-column";

const Contact = () => {
    return (
        <div>
            <H1Title title="Contact" description="Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact."/>
            <Container>
                <ContainerColumn>
                    <H2Title title="Formulaire de contact" />
                </ContainerColumn>
                <ContainerColumn>
                    <H2Title title="Mes coordonnées" />
                </ContainerColumn>
            </Container>
        </div>
    )
}

export default Contact;