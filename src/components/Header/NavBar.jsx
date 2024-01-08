import Logo from '../../images/logo.svg'
import className from './header.module.scss'
import NavBarButtonsContainer from "./NavBarButtonsContainer.jsx";
import BlackButton from "../UI/Buttons/blackButton/BlackButton.jsx";
import NavBarLogoContainer from "./NavBarLogoContainer.jsx";

const NavBar = () => {
    return (
        <div className={className.navBar}>
            <div className={className.navBarContainer}>
                <NavBarLogoContainer/>
                <NavBarButtonsContainer/>
                <BlackButton name={'Contact us'}/>
            </div>
        </div>
    )
}

export default NavBar;