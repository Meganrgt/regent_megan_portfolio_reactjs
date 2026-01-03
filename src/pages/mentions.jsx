import { Link } from "react-router-dom";
import Accordion from "../components/accordion";
import AccordionContainer from "../components/accordion-container";
import H1Title from "../components/page-title";
import ContactDetails from "../components/contact-details";

const Mentions = () => {
    return (
        <div>
            <H1Title title="Mentions légales"/>
            <AccordionContainer>
                <Accordion accordionTitle="Editeur du site" accordionBodyTitle="John Doe" target="collapseOne">
                    <address>
                        <ContactDetails icon="bi bi-map" details=" 40 rue Laure Diebold" />
                        <ContactDetails icon="bi bi-geo-alt" details=" 69009 Lyon, France" />
                        <ContactDetails icon="bi bi-phone" details=" 10 20 30 40 50" />
                        <ContactDetails icon="bi bi-envelope-at" details=" john.doe@gmail.com" />
                    </address>
                </Accordion>
                <Accordion accordionTitle="Hébergeur" accordionBodyTitle="Alwaysdata" target="collapseTwo">
                    <address>
                        <p>91 Rue du Feaubourg Saint-Honoré, 75008 Paris</p>
                        <p><i class="bi bi-globe"></i><a href="https://www.alwaysdata.com/fr/" > www.alwaysdata.com</a></p>
                    </address>
                </Accordion>
                <Accordion accordionTitle="Crédits" accordionBodyTitle="Crédits" target="collapseThree">
                    <p>Ce site a été déposé par John Doe, étudiant au <Link to="https://www.centre-europeen-formation.fr/landing/multi-marque/?code=1464&utm_source=google&utm_medium=cpc&utm_campaign=TOTAL-REF_PAYANT-Marque_CEF&gad_source=1&gad_campaignid=59552660&gbraid=0AAAAAD-SFizSgdbHGE5BMFMCZqWR9t99q&gclid=CjwKCAiAmePKBhAfEiwAU3Ko3EJy1URXpNqoIEV7ZSxDL0oqsNQynEoPkjjaqQkJLM9Gqxah0-VCtRoCiU0QAvD_BwE">Centre européen de formation</Link>.</p>
                    <p>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <Link to="https://pixabay.com/fr/">Pixabey</Link>.</p>
                    <p>La favicon de ce site a été fournie par <Link to="https://www.flaticon.com/">John Doe Icons erstellt von Freepik - Flaticon</Link>.</p>
                </Accordion>
            </AccordionContainer>
        </div>
    )
}

export default Mentions;