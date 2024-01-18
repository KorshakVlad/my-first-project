import className from "./offersCard.module.scss";
export const OffersCard = ({ image, text }) => {
  return (
    <div className={className.offersCard}>
      <img src={image} />
      <p className={className.offersCardText}>{text}</p>
    </div>
  );
};
