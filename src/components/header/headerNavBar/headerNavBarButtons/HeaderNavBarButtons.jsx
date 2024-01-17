import { headerNavBarPageButtons } from "../../../../constants/headerNavBarPageButtons.js";
import className from "./headerNavBarButtons.module.scss";
import Button from "../../../UI/Buttons/Button.jsx";

const HeaderNavBarButtons = () => {
  const BUTTON_CLASS_NAME = "headerNavBarPageButton";

  return (
    <nav className={className.headerNavBarButtons}>
      {headerNavBarPageButtons.map((item) => {
        return (
          <Button style={BUTTON_CLASS_NAME} key={item.id} text={item.name} />
        );
      })}
    </nav>
  );
};
export default HeaderNavBarButtons;
