import className from "./ourAchievementsContentText.module.scss";

export const OurAchievementsContentText = () => {
  return (
    <>
      <section>
        <h3 className={className.ourAchievementsLeftContainerHeaderText}>
          Discover Your Dream Property with Estatein
        </h3>
        <p className={className.ourAchievementsLeftContainerText}>
          Your journey to finding the perfect property begins here. Explore our
          listings to find the home that matches your dreams.
        </p>
      </section>
    </>
  );
};
