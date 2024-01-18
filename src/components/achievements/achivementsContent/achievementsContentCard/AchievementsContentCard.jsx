import className from "./achievementsContentCard.module.scss";

export const AchievementsContentCard = (props) => {
  return (
    <div className={className.achievementsCard}>
      <p className={className.achievementsCardHeader}>{props.name}</p>
      <p className={className.achievementsCardText}>{props.value}</p>
    </div>
  );
};
