import HouseMainPage from '../../../images/houseMainPage.svg'
import className from '../OurAchivements.module.scss'

export const OurAchievementsRightContainer = () =>{
    return (
        <div className={className.ourAchievementsRightContainer}>
            <img className={className.ourAchievementsImage} src={HouseMainPage} alt=""/>
        </div>
    )
}