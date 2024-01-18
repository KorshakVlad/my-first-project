import { offers } from "../../../constants/offersData.js";
import { OffersCard } from "./offersCard/OffersCard.jsx";
import className from "./offersCards.module.scss";

export const OffersCards = () => {
  return (
    <section className={className.offersCards}>
      {offers.map((offer) => (
        <OffersCard image={offer.image} text={offer.text} />
      ))}
    </section>
  );
};
