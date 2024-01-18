import Button from "../../../UI/Buttons/Button.jsx";
import className from "./achievementsContentButtons.module.scss";
import { buttons } from "../../../../constants/achievementsButton.js";
export const AchievementsButtonContainer = () => {
  return (
    <section className={className.achievementsButtonContainer}>
      {buttons.map((button) => (
        <Button style={button.style} text={button.text} />
      ))}
    </section>
  );
};
