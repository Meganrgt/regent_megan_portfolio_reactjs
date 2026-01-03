import Card from "../components/card";
import H1Title from "../components/page-title";
import ImageFreshFood from "../assets/images/portfolio/fresh-food.jpg";


const Portfolio = () => {
    return (
        <div>
            <H1Title title="Portfolio" description="Voici quelques-unes de mes réalisations"/>
            <Card imageLink={ImageFreshFood} cardTitle="Fresh Food" cardText="Site de vente de produit frais en ligne" cardFooter="site réalisé avec PHP et MySQL" />
        </div>
    )
}

export default Portfolio;