import Card from "../components/card";
import H1Title from "../components/page-title";
import ImageFreshFood from "../assets/images/portfolio/fresh-food.jpg";
import ImageRestaurantJaponais from "../assets/images/portfolio/restaurant-japonais.jpg";
import ImageBienEtre from "../assets/images/portfolio/espace-bien-etre.jpg";
import ImageSeo from "../assets/images/portfolio/seo.jpg";
import ImageCoder from "../assets/images/portfolio/coder.jpg";
import ImageScreens from "../assets/images/portfolio/screens.jpg";


const Portfolio = () => {
    return (
        <div>
            <H1Title title="Portfolio" description="Voici quelques-unes de mes réalisations"/>
            <div className="row row-cols-md-3 g-4">
                <Card imageLink={ImageFreshFood} cardTitle="Fresh Food" cardText="Site de vente de produit frais en ligne" cardFooter="Site réalisé avec PHP et MySQL" />
                <Card imageLink={ImageRestaurantJaponais} cardTitle="Restaurant Akira" cardText="Site de vente de produit frais en ligne" cardFooter="Site réalisé avec Wordpress" />
                <Card imageLink={ImageBienEtre} cardTitle="Espace bien-être" cardText="Site de vente de produit frais en ligne" cardFooter="Site réalisé avec LARAVEL" />
                <Card imageLink={ImageSeo} cardTitle="SEO" cardText="Amélioration du référencement d'un site e-commerce" cardFooter="Utilisation des outils SEO" />
                <Card imageLink={ImageCoder} cardTitle="Création d'une API" cardText="Création d'une API RESTFULL publique" cardFooter="PHP - SYMFONY" />
                <Card imageLink={ImageScreens} cardTitle="Maquette d'un site web" cardText="Création d'un prototype d'un site" cardFooter="Réalisé avec FIGMA" />
            </div>
            
        </div>
    )
}

export default Portfolio;