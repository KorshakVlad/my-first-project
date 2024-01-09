import HeaderButton from "../../UI/Buttons/headerButton/HeaderButton.jsx";
import {buttonsData} from "../../../assets/buttonsData.js"
import className from '../header.module.scss'
const NavBarButtonsContainer = () => {



    return (
        <div className={className.navBarButtonsContainer}>
            {buttonsData.map(item => {
                return(
                <HeaderButton key={item.id} path={item.path} name={item.name}/>
                )})}
        </div>
    )
}
export default NavBarButtonsContainer;