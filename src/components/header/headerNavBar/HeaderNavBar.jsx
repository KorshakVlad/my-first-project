
import className from './headerNavBar.module.scss'
import HeaderNavBarButtons from "./headerNavBarButtons/HeaderNavBarButtons.jsx";
import Button from "../../UI/Buttons/button/Button.jsx";
import HeaderNavBarLogo from "./headerNavBarLogo/HeaderNavBarLogo.jsx";

const BUTTON_TEXT = 'Contact us';
const BUTTON_CLASS_NAME = 'headerNavBarButton'

const HeaderNavBar = () => {
    return (
        <div className={className.headerNavBar}>
            <div className={className.headerNavBarContainer}>
                <HeaderNavBarLogo/>
                <HeaderNavBarButtons/>
                <Button style={BUTTON_CLASS_NAME} text={BUTTON_TEXT}/>
            </div>
        </div>
    )
}

export default HeaderNavBar;