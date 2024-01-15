import className from '../OurAchivements.module.scss'

export const OurAchievementsCard = (props) =>{
    return(
        <div className={className.ourAchievementsCard}>
            <p className={className.ourAchievementsCardHeader}>
                {props.name}
            </p>
            <p className={className.ourAchievementsCardText}>
                {props.value}
            </p>
        </div>
    )
}