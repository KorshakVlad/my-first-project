import className from "./ourAchievementsContentCard.module.scss";

export const OurAchievementsContentCard = (props) => {
  return (
    <div className={className.ourAchievementsCard}>
      <p className={className.ourAchievementsCardHeader}>{props.name}</p>
      <p className={className.ourAchievementsCardText}>{props.value}</p>
    </div>
  );
};
