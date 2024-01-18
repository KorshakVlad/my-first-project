import className from "./featuredPropertiesCard.module.scss";
import { FeaturedPropertiesCardText } from "./faturedPropertiesCardText/FeaturedPropertiesCardText.jsx";
import { FeaturedPropertiesCardRooms } from "./featuredPropertiesCardRooms/FeaturedPropertiesCardRooms.jsx";
import { FeaturedPropertiesCardPriceAndButton } from "./featuredPropertiesCardPriceAndButon/FeaturedPropertiesCardPriceAndButton.jsx";

export const FeaturedPropertiesCard = ({
  name,
  image,
  description,
  bedroom,
  bathroom,
  type,
  price,
}) => {
  return (
    <div className={className.featuredPropertiesCard}>
      <img src={image} />
      <FeaturedPropertiesCardText name={name} description={description} />
      <FeaturedPropertiesCardRooms
        type={type}
        bathroom={bathroom}
        bedroom={bedroom}
      />
      <FeaturedPropertiesCardPriceAndButton price={price} />
    </div>
  );
};
