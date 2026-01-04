import PortfolioCard from "../components/portfolio-card";
import PageTitle from "../components/page-title";
import HeaderStandard from "../components/header-standard";
import ImageFreshFood from "../assets/images/portfolio/fresh-food.jpg";
import ImageRestaurantJaponais from "../assets/images/portfolio/restaurant-japonais.jpg";
import ImageBienEtre from "../assets/images/portfolio/espace-bien-etre.jpg";
import ImageSeo from "../assets/images/portfolio/seo.jpg";
import ImageCoder from "../assets/images/portfolio/coder.jpg";
import ImageScreens from "../assets/images/portfolio/screens.jpg";


const Portfolio = () => {
    return (
        <div>
            <HeaderStandard />
            <PageTitle title="Portfolio" description="Voici quelques-unes de mes réalisations"/>
            <div className="container row row-cols-md-3 g-4">
                <PortfolioCard imageLink={ImageFreshFood} cardTitle="Fresh Food" cardText="Site de vente de produit frais en ligne" cardFooter="Site réalisé avec PHP et MySQL" />
                <PortfolioCard imageLink={ImageRestaurantJaponais} cardTitle="Restaurant Akira" cardText="Site de vente de produit frais en ligne" cardFooter="Site réalisé avec Wordpress" />
                <PortfolioCard imageLink={ImageBienEtre} cardTitle="Espace bien-être" cardText="Site de vente de produit frais en ligne" cardFooter="Site réalisé avec LARAVEL" />
                <PortfolioCard imageLink={ImageSeo} cardTitle="SEO" cardText="Amélioration du référencement d'un site e-commerce" cardFooter="Utilisation des outils SEO" />
                <PortfolioCard imageLink={ImageCoder} cardTitle="Création d'une API" cardText="Création d'une API RESTFULL publique" cardFooter="PHP - SYMFONY" />
                <PortfolioCard imageLink={ImageScreens} cardTitle="Maquette d'un site web" cardText="Création d'un prototype d'un site" cardFooter="Réalisé avec FIGMA" />
            </div>
            
        </div>
    )
}

export default Portfolio;