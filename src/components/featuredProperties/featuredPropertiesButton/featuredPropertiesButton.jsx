import Button from "../../UI/Buttons/Button.jsx";
import className from "./featuredPropertiesButton.module.scss";
export const FeaturedPropertiesButton = () => {
  const BUTTON_CLASS_NAME = "featuresPropertiesButton";
  const BUTTON_TEXT = "View All Properties";

  return (
    <div className={className.featuredPropertiesButton}>
      <Button style={BUTTON_CLASS_NAME} text={BUTTON_TEXT} />
    </div>
  );
};
