import {OurAchievementsCard} from "./OurAchievementsCard.jsx";
import className from '../OurAchivements.module.scss'
export const OurAchievementsCardsContainer = () => {

    const cards = [
        {
            name: '200+',
            value: 'Happy Customers',
        },
        {
            name: '10k',
            value: 'Properties For Clients',
        },
        {
            name: '16+',
            value: 'HYears of Experience',
        },
    ]

    return (
        <div className={className.ourAchievementsCardsContainer}>
            {cards.map(item =>{
                return(
                    <OurAchievementsCard name={item.name} value={item.value}/>
                )
            })}
        </div>
    )
}