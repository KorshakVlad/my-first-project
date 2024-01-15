import className from "./headerNavBarLogo.module.scss";
import Logo from "../../../../images/logo.svg";
import logoText from '../../../../images/logoText.svg'
const HeaderNavBarLogo = () =>{
    return(
            <div className={className.headerNavBarLogo}>
                <img src={Logo} />
                <img src={logoText} className={className.headerNavBarLogoText}/>
            </div>
        )
}

export default HeaderNavBarLogo