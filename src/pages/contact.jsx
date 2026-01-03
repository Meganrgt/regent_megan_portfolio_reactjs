import H2Title from "../components/title-h2";
import H1Title from "../components/page-title";
import Container from "../components/container";
import ContainerColumn from "../components/container-column";
import FormInput from "../components/input";

const Contact = () => {
    return (
        <div>
            <H1Title title="Contact" description="Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact."/>
            <Container>
                <ContainerColumn>
                    <H2Title title="Formulaire de contact" />
                    <FormInput type="text" id="floatingName" label="Votre nom" placeholder="John Doe"/>
                    <FormInput type="email" id="floatingEmail" label="Vote adresse email" placeholder="example@gmail.com" />
                    <FormInput type="tel" id="floatingPhoneNumber" label="Vote numéro de téléphone" placeholder="0102030405" />
                    <FormInput type="text" id="floatingObject" label="Sujet" placeholder="Demande d'information" />
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Ecrivez votre message" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Votre message</label>
                    </div>
                    <button type="button" class="btn btn-primary" >Envoyer</button>
                </ContainerColumn>
                <ContainerColumn>
                    <H2Title title="Mes coordonnées" />
                </ContainerColumn>
            </Container>
        </div>
    )
}

export default Contact;