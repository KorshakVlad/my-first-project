import { AchievementsContent } from "../../components/achievements/achivementsContent/AchievementsContent.jsx";
import { AchievementsImage } from "../../components/achievements/achivementsImage/AchievementsImage.jsx";
import className from "./ourAchievements.module.scss";
import DiscoverYourDream from "../../images/discoverYourDream.svg";

export const Achievements = () => {
  return (
    <article className={className.achievements}>
      <AchievementsContent />
      <img className={className.achievementsImage} src={DiscoverYourDream} />
      <AchievementsImage />
    </article>
  );
};
