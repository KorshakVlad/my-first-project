import Button from "../../../../UI/Buttons/Button.jsx";
import className from "./featuredPropertiesCardPriceAndButton.module.scss";

export const FeaturedPropertiesCardPriceAndButton = ({ price }) => {
  const BUTTON_STYLE = "featuredPropertiesCardButton";
  const BUTTON_TEXT = "View Property Details";

  return (
    <div className={className.featuredPropertiesCardPriceAndButton}>
      <div>
        <p className={className.featuredPropertiesCardPriceAndButtonHeader}>
          Price
        </p>
        <p className={className.featuredPropertiesCardPriceText}>${price}</p>
      </div>
      <Button style={BUTTON_STYLE} text={BUTTON_TEXT} />
    </div>
  );
};
