import Abstract from '../../../images/abstract.svg'
import className from './headerBanner.module.scss'
const HeaderBanner = () =>{
    return(
        <div className={className.headerBanner}>
            <img className={className.headerBannerImage} src={Abstract}/>
            <h4 className={className.headerBannerText}>
                ✨Discover Your Dream Property with Estatein
            </h4>
            <a href className={className.headerBannerLearnMore}>Learn more</a>

        </div>
    )
}

export default HeaderBanner;