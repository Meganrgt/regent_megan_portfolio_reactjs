import H3Title from "../components/title-h2";
import PageTitle from "../components/page-title";
import Container from "../components/container";
import ContainerColumn from "../components/container-column";
import FormInput from "../components/input";
import ContactDetails from "../components/contact-details";

const Contact = () => {
    return (
        <div>
            <PageTitle title="Contact" description="Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact."/>
            <Container>
                <ContainerColumn>
                    <H3Title title="Formulaire de contact" />
                    <form class="needs-validation" novalidate>
                        <FormInput type="text" id="floatingName" label="Votre nom" placeholder="John Doe"/>
                        <FormInput type="email" id="floatingEmail" label="Vote adresse email" placeholder="example@gmail.com" />
                        <FormInput type="tel" id="floatingPhoneNumber" label="Vote numéro de téléphone" placeholder="0102030405" />
                        <FormInput type="text" id="floatingObject" label="Sujet" placeholder="Demande d'information" />
                        <div class="form-floating">
                            <textarea style={{height:'300px'}}className="form-control" placeholder="Ecrivez votre message" id="floatingTextarea" required></textarea>
                            <label for="floatingTextarea">Votre message</label>
                        </div>
                        <div className="text-center mt-3">
                            <button type="submit" className="btn btn-primary">Envoyer</button>
                        </div>
                    </form>
                    
                </ContainerColumn>
                <ContainerColumn>
                    <H3Title title="Mes coordonnées" />
                    <h3>John Doe</h3>
                    <address>
                        <ContactDetails icon="bi bi-map" details=" 40 rue Laure Diebold" />
                        <ContactDetails icon="bi bi-geo-alt" details=" 69009 Lyon, France" />
                        <ContactDetails icon="bi bi-phone" details=" 10 20 30 40 50" />
                        <ContactDetails icon="bi bi-envelope-at" details=" john.doe@gmail.com" />
                    </address>
                    <iframe title="Carte adresse Lyon" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.254312366655!2d4.794107988931177!3d45.77866189651516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1767449761741!5m2!1sfr!2sfr" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </ContainerColumn>
            </Container>
        </div>
    )
}

export default Contact;