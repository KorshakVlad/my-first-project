import className from "./featuredPropertiesCards.module.scss";
import { FeaturedPropertiesCard } from "./featuredPropertiesCard/FeaturedPropertiesCard.jsx";

export const FeaturedPropertiesCards = ({ featuredProperties }) => {
  return (
    <div className={className.featuredPropertiesCards}>
      {featuredProperties.map((card) => (
        <FeaturedPropertiesCard
          name={card.name}
          type={card.type}
          bathroom={card.bathroom}
          bedroom={card.bedroom}
          description={card.description}
          image={card.image}
          price={card.price}
        />
      ))}
    </div>
  );
};
