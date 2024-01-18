import className from "./achievementsContent.module.scss";
import { AchievementsContentCards } from "./achievementsContentCards/AchievementsContentCards.jsx";
import { AchievementsContentText } from "./AchievementsContentText/AchievementsContentText.jsx";
import { AchievementsButtonContainer } from "./achievementsContentButtons/AchievementsContentButtons.jsx";

export const AchievementsContent = () => {
  return (
    <div className={className.achievementsContent}>
      <AchievementsContentText />
      <AchievementsButtonContainer />
      <AchievementsContentCards />
    </div>
  );
};
