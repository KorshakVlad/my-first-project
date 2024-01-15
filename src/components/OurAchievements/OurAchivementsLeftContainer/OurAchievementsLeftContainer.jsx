import className from '../OurAchivements.module.scss'
import {OurAchievementsButtonContainer} from "./OurAchievementsButtonContainer.jsx";
import {OurAchievementsCardsContainer} from "./OurAchievementsCardsContainer.jsx";

export const OurAchievementsLeftContainer = () =>{
    return(
        <div className={className.ourAchievementsLeftContainer}>
            <div>
                <p className={className.ourAchievementsLeftContainerHeaderText}>
                    Discover Your Dream Property with Estatein
                </p>
                <p className={className.ourAchievementsLeftContainerText}>
                    Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
                </p>
            </div>
            <OurAchievementsButtonContainer/>
            <OurAchievementsCardsContainer/>
        </div>
    )
}