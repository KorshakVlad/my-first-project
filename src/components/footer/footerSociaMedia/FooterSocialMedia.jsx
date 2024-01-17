import className from "./footerSocialMedia.module.scss";
import { FooterSocialMediaText } from "./footerSocialMediaText/FooterSocialMediaTextContainer.jsx";
import { FooterSocialMediaImages } from "./footerSocialMediaImages/FooterSocialMediaImages.jsx";

export const FooterSocialMedia = () => {
  return (
    <nav className={className.footerSocialMedia}>
      <FooterSocialMediaText />
      <FooterSocialMediaImages />
    </nav>
  );
};
