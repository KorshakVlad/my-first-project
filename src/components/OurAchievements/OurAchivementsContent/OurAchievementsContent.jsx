import className from "./OurAchievementsContent.module.scss";
import { OurAchievementsButtonContainer } from "./ourAchievementsContentButtons/OurAchievementsContentButtons.jsx";
import { OurAchievementsContentCards } from "./ourAchievementsContentCards/OurAchievementsContentCards.jsx";
import { OurAchievementsContentText } from "./OurAchievementsContentText/OurAchievementsContentText.jsx";

export const OurAchievementsContent = () => {
  return (
    <div className={className.ourAchievementsContent}>
      <OurAchievementsContentText />
      <OurAchievementsButtonContainer />
      <OurAchievementsContentCards />
    </div>
  );
};
