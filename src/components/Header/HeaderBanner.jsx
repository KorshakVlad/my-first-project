import Abstract from '../../images/abstract.svg'
import className from './header.module.scss'
const HeaderBanner = () =>{
    return(
        <div className={className.banner}>
            <img className={className.bannerImage} src={Abstract}/>
            <h4 className={className.bannerText}>
                ✨Discover Your Dream Property with Estatein
            </h4>
            <a href className={className.learnMore}>Learn more</a>

        </div>
    )
}

export default HeaderBanner;