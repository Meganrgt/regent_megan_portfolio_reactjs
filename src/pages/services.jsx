import HeaderStandard from "../components/header-standard";
import H1Title from "../components/page-title";
import ServiceBlock from "../components/service";

const Services = () => {
    return (
        <div>
            <img src="" alt="" />
            <HeaderStandard />
            <H1Title title="Mon offre de service" description="Voici les prestations sur lesquelles je peux intervenir"/>
            <main>
                <div className="row">
                    <ServiceBlock icon="bi bi-brush" title="UX Design" description="L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés etc.) enplaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et la plus agréable possible." />
                    <ServiceBlock icon="bi bi-brush" title="UX Design" description="L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés etc.) enplaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et la plus agréable possible." />
                    <ServiceBlock icon="bi bi-brush" title="UX Design" description="L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés etc.) enplaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et la plus agréable possible." />
                </div>
            </main>
        </div>
    )
}

export default Services;