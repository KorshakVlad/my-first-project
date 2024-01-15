import className from './../footer.module.scss'
import Facebook from '../../../images/facebook.svg'
import LinkedIn from '../../../images/linkedin.svg'
import Twitter from '../../../images/twitter.svg'
import Youtube from '../../../images/youtube.svg'

import {FooterSocialMediaImage} from "./FooterSocialMediaImage.jsx";

//TODO all images to array

export const FooterSocialMediaContainer = () => {
    return (
        <div className={className.footerSocialMediaContainer}>
            <FooterSocialMediaImage img={Facebook}/>
            <FooterSocialMediaImage img={LinkedIn}/>
            <FooterSocialMediaImage img={Twitter}/>
            <FooterSocialMediaImage img={Youtube}/>
        </div>
    )
}