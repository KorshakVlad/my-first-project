import className from './footerSocialMedia.module.scss'
import {FooterSocialMediaText} from "./footerSocialMediaText/FooterSocialMediaTextContainer.jsx";
import {
    FooterSocialMediaImages
} from "./footerSocialMediaImages/FooterSocialMediaImages.jsx";

export const FooterSocialMedia = () =>{
    return(
        <div className={className.footerSocialMedia}>
            <FooterSocialMediaText/>
            <FooterSocialMediaImages/>
        </div>
    )
}