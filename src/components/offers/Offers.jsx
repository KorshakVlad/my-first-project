import { OffersCards } from "./offersCards/OffersCards.jsx";
import classname from "./offers.module.scss";

export const Offers = () => {
  return (
    <article className={classname.offers}>
      <OffersCards />
    </article>
  );
};
