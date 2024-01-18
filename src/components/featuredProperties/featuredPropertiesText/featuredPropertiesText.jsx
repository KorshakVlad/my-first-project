import className from "./featuredPropertiesText.module.scss";

export const FeaturedPropertiesText = () => {
  return (
    <div className={className.featuredPropertiesText}>
      <h3 className={className.featuredPropertiesTextHeader}>
        Featured Properties
      </h3>
      <p className={className.featuredPropertiesTextInfo}>
        Explore our handpicked selection of featured properties. Each listing
        offers a glimpse into exceptional homes and investments available
        through Estatein. Click "View Details" for more information.
      </p>
    </div>
  );
};
