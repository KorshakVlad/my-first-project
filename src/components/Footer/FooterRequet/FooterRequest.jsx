import classNames from '../footer.module.scss'
import Logo from '../../../images/logo.svg'
import LogoText from '../../../images/logoText.svg'
import {FooterRequestInput} from "../../UI/Input/FooterRequestInput.jsx";

export const FooterRequest = () => {

    //TODO move out logo
    return (
        <div className={classNames.footerRequest}>
            <div className={classNames.footerLogoContainer}>
                <img src={Logo}/>
                <img src={LogoText}/>
            </div>
            <div>
             <FooterRequestInput/>
            </div>
        </div>
    )
}