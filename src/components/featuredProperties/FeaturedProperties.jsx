import className from "./featuredProperties.module.scss";
import { FeaturedPropertiesText } from "./featuredPropertiesText/featuredPropertiesText.jsx";
import { FeaturedPropertiesButton } from "./featuredPropertiesButton/featuredPropertiesButton.jsx";
import { FeaturedPropertiesCards } from "./featuredPropertiesCards/FeaturedPropertiesCards.jsx";
export const FeaturedProperties = () => {
  return (
    <article className={className.featuredProperties}>
      <header className={className.featuredPropertiesHeader}>
        <FeaturedPropertiesText />
        <FeaturedPropertiesButton />
      </header>
      <article className={className.featuredPropertiesContent}>
        <FeaturedPropertiesCards />
      </article>
    </article>
  );
};
