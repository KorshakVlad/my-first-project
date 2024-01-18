import HouseMainPage from "../../../images/houseMainPage.svg";
import className from "./achievementsImage.module.scss";

export const AchievementsImage = () => {
  return (
    <div className={className.achievementsRightContainer}>
      <img className={className.achievementsImage} src={HouseMainPage} alt="" />
    </div>
  );
};
