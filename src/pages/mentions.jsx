import { Link } from "react-router-dom";
import Accordion from "../components/accordion";
import AccordionContainer from "../components/accordion-container";
import H1Title from "../components/page-title";

const Mentions = () => {
    return (
        <div>
            <H1Title title="Mentions légales"/>
            <AccordionContainer>
                <Accordion accordionTitle="Editeur du site" accordionBodyTitle="John Doe" target="collapseOne">
                    <H1Title title="Mon offre de service" description="Voici les prestations sur lesquelles je peux intervenir"/>
                </Accordion>
                <Accordion accordionTitle="Hébergeur" accordionBodyTitle="Alwaysdata" target="collapseTwo">
                    <H1Title title="Mon offre de service" description="Voici les prestations sur lesquelles je peux intervenir"/>
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