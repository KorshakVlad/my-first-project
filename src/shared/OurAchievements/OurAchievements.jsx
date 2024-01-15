import {
    OurAchievementsLeftContainer
} from "../../components/OurAchievements/OurAchivementsLeftContainer/OurAchievementsLeftContainer.jsx";
import {
    OurAchievementsRightContainer
} from "../../components/OurAchievements/OurAchivementsRightContainer/OurAchievementsRightContainer.jsx";
import className from '../../components/OurAchievements/OurAchivements.module.scss'
import DiscoverYourDream from '../../images/discoverYourDream.svg'

export const OurAchievements = () =>{
    return(
        <div className={className.ourAchievements}>
            <OurAchievementsLeftContainer/>
            <img style={{position: 'absolute'}} src={DiscoverYourDream}/>
            <OurAchievementsRightContainer/>
        </div>
    )
}