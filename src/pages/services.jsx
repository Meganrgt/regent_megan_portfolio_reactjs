import HeaderStandard from "../components/header-standard";
import PageTitle from "../components/page-title";
import ServiceBlock from "../components/service";

const Services = () => {
    return (
        <div>
            <HeaderStandard />
            <PageTitle title="Mon offre de service" description="Voici les prestations sur lesquelles je peux intervenir"/>
            <main>
                <div className="row">
                    <ServiceBlock icon="bi bi-brush text-primary" title="UX Design" description="L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés etc.) enplaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et la plus agréable possible." />
                    <ServiceBlock icon="bi bi-code-slash text-primary" title="Développement web" description="Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, Javascript, PHP etc.) et des frameworks (Bootstrap, React, Angular etc.)." />
                    <ServiceBlock icon="bi bi-search text-primary" title="Référencement" description="Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur ce site." />
                </div>
            </main>
        </div>
    )
}

export default Services;