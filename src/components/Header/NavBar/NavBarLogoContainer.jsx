import className from "../header.module.scss";
import Logo from "../../../images/logo.svg";
import logoText from '../../../images/logoText.svg'
const NavBarLogoContainer = () =>{
    return(
            <div className={className.navBarLogoContainer}>
                <img src={Logo} className={className.logoStyle}/>
                <img src={logoText} className={className.logoText}/>
            </div>
        )
}

export default NavBarLogoContainer