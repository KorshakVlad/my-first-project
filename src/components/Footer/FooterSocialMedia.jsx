import className from './footer.module.scss'
import {FooterSocialMediaTextContainer} from "./FooterSociaMedia/FooterSocialMediaTextContainer.jsx";
import {FooterSocialMediaContainer} from "./FooterSociaMedia/FooterSocialMediaContainer.jsx";

export const FooterSocialMedia = () =>{
    return(
        <div className={className.footerSocialMedia}>
            <FooterSocialMediaTextContainer/>
            <FooterSocialMediaContainer/>
        </div>
    )
}