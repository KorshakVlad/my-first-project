import className from "./featuredPtooertiesCardText.module.scss";
export const FeaturedPropertiesCardText = ({ name, description }) => {
  return (
    <div className={className.featuredPropertiesCardTextContent}>
      <h2 className={className.featuredPropertiesCardTextHeader}>{name}</h2>
      <p className={className.featuredPropertiesCardText}>{description}</p>
    </div>
  );
};
