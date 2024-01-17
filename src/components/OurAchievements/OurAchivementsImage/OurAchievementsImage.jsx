import HouseMainPage from "../../../images/houseMainPage.svg";
import className from "./ourAchievementsImage.module.scss";

export const OurAchievementsImage = () => {
  return (
    <div className={className.ourAchievementsRightContainer}>
      <img
        className={className.ourAchievementsImage}
        src={HouseMainPage}
        alt=""
      />
    </div>
  );
};
