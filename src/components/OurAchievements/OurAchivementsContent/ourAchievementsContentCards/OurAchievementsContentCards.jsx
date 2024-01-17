import { OurAchievementsContentCard } from "../ourAchievementsContentCard/OurAchievementsContentCard.jsx";
import className from "./ourAchievementsContentCards.module.scss";
import { cards } from "../../../../constants/ourAchievementsCards.js";

export const OurAchievementsContentCards = () => {
  return (
    <div className={className.ourAchievementsCardsContainer}>
      {cards.map((item) => {
        return (
          <OurAchievementsContentCard name={item.name} value={item.value} />
        );
      })}
    </div>
  );
};
