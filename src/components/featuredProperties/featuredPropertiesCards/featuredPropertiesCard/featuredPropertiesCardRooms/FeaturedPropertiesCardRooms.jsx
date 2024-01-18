import Bedroom from "../../../../../images/bedroom.svg";
import Bathroom from "../../../../../images/bathroom.svg";
import Type from "../../../../../images/villaIcon.svg";
import className from "./featuredPropertiesCardRooms.module.scss";
export const FeaturedPropertiesCardRooms = ({ bedroom, bathroom, type }) => {
  return (
    <div className={className.featuredPropertiesCardRooms}>
      <div className={className.featuredPropertiesCardRoomsItem}>
        <img src={Bedroom} />
        <p className={className.featuredPropertiesCardRoomsItemText}>
          {bedroom}-Bedroom
        </p>
      </div>
      <div className={className.featuredPropertiesCardRoomsItem}>
        <img src={Bathroom} />
        <p className={className.featuredPropertiesCardRoomsItemText}>
          {bathroom}-Bathroom
        </p>
      </div>
      <div className={className.featuredPropertiesCardRoomsItem}>
        <img src={Type} />
        <p className={className.featuredPropertiesCardRoomsItemText}>{type}</p>
      </div>
    </div>
  );
};
