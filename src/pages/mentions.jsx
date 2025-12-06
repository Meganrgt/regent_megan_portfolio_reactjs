import Accordion from "../components/accordion";
import AccordionContainer from "../components/accordion-container";
import H1Title from "../components/page-title";

const Mentions = () => {
    return (
        <div>
            <H1Title title="Mentions légales"/>
            <AccordionContainer>
                <Accordion accordionTitle="Test" accordionBody="Ceci est un test" target="collapseOne" />
                <Accordion accordionTitle="Test" accordionBody="Ceci est un test" target="collapseTwo"/>
                <Accordion accordionTitle="Test" accordionBody="Ceci est un test" target="collapseThree" />
            </AccordionContainer>
        </div>
    )
}

export default Mentions;