import classNames from "./footerRequestFormLogo.module.scss";
import Logo from "../../../../../images/logo.svg";
import LogoText from "../../../../../images/logoText.svg";

export const FooterRequestFormLogo = () => {
  return (
    <div className={classNames.footerLogoContainer}>
      <img src={Logo} />
      <img src={LogoText} />
    </div>
  );
};
