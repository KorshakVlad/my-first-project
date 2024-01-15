import {headerNavBarPageButtons} from "../../../../constants/headerNavBarPageButtons.js"
import className from './headerNavBarButtons.module.scss'
import Button from "../../../UI/Buttons/button/Button.jsx";

const HeaderNavBarButtons = () => {

const BUTTON_CLASS_NAME = 'headerNavBarPageButton'

    return (
        <div className={className.headerNavBarButtons}>
            {headerNavBarPageButtons.map(item => {
                return(
                <Button style={BUTTON_CLASS_NAME} key={item.id}  text={item.name}/>
                )})}
        </div>
    )
}
export default HeaderNavBarButtons;