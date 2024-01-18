import { AchievementsContentCard } from "../achievementsContentCard/AchievementsContentCard.jsx";
import className from "./AchievementsContentCards.module.scss";
import { cards } from "../../../../constants/achievementsCards.js";

export const AchievementsContentCards = () => {
  return (
    <div className={className.achievementsCardsContainer}>
      {cards.map((item) => {
        return <AchievementsContentCard name={item.name} value={item.value} />;
      })}
    </div>
  );
};
