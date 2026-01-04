import HeaderStandard from "../components/header-standard";
import PageTitle from "../components/page-title";
import ServiceCard from "../components/service-card";

const Services = () => {
    return (
        <div>
            <HeaderStandard />
            <PageTitle title="Mon offre de service" description="Voici les prestations sur lesquelles je peux intervenir"/>
                <div className="container row-cols-md-3 row g-4">
                    <ServiceCard icon="bi bi-brush text-primary" title="UX Design" description="L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés etc.) enplaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et la plus agréable possible." />
                    <ServiceCard icon="bi bi-code-slash text-primary" title="Développement web" description="Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, Javascript, PHP etc.) et des frameworks (Bootstrap, React, Angular etc.)." />
                    <ServiceCard icon="bi bi-search text-primary" title="Référencement" description="Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur ce site." />
                </div>
        </div>
    )
}

export default Services;