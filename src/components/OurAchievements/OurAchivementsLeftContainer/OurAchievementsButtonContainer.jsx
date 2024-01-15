import Button from "../../UI/Buttons/button/Button.jsx";
import PurpleButton from "../../UI/Buttons/purpleButton/PurpleButton.jsx";
import className from '../OurAchivements.module.scss'
export const OurAchievementsButtonContainer = () =>{
    return(
        <div className={className.ourAchievementsButtonContainer}>
            <Button name={'Learn More'}/>
            <PurpleButton name={'Browse Properties'}/>
        </div>
    )
}