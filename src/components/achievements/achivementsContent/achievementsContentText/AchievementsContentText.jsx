import className from "./achievementsContentText.module.scss";

export const AchievementsContentText = () => {
  return (
    <>
      <section>
        <h3 className={className.achievementsLeftContainerHeaderText}>
          Discover Your Dream Property with Estatein
        </h3>
        <p className={className.achievementsLeftContainerText}>
          Your journey to finding the perfect property begins here. Explore our
          listings to find the home that matches your dreams.
        </p>
      </section>
    </>
  );
};
