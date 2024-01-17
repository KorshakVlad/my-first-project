import { OurAchievementsContent } from "../../components/OurAchievements/OurAchivementsContent/OurAchievementsContent.jsx";
import { OurAchievementsImage } from "../../components/OurAchievements/OurAchivementsImage/OurAchievementsImage.jsx";
import className from "./ourAchievements.module.scss";
import DiscoverYourDream from "../../images/discoverYourDream.svg";

export const OurAchievements = () => {
  return (
    <article className={className.ourAchievements}>
      <OurAchievementsContent />
      <img style={{ position: "absolute" }} src={DiscoverYourDream} />
      <OurAchievementsImage />
    </article>
  );
};
