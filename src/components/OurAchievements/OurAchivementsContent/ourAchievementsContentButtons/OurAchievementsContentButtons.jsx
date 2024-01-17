import Button from "../../../UI/Buttons/Button.jsx";
import className from "./ourAchievementsContentButtons.module.scss";

export const OurAchievementsButtonContainer = () => {
  const PROPERTIES_BUTTON = "ourAchievementsButton";
  const LEARN_MORE_BUTTON = "headerNavBarButton";

  return (
    <section className={className.ourAchievementsButtonContainer}>
      <Button style={LEARN_MORE_BUTTON} text={"Learn More"} />
      <Button style={PROPERTIES_BUTTON} text={"Browse Properties"} />
    </section>
  );
};
