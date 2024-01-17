import className from "./footerSocialMediaImages.module.scss";
import Facebook from "../../../../images/facebook.svg";
import LinkedIn from "../../../../images/linkedin.svg";
import Twitter from "../../../../images/twitter.svg";
import Youtube from "../../../../images/youtube.svg";
import { FooterSocialMediaImage } from "./footerSocialMediaImage/FooterSocialMediaImage.jsx";

//TODO all images to array

export const FooterSocialMediaImages = () => {
  const image = [Facebook, LinkedIn, Twitter, Youtube];

  return (
    <div className={className.footerSocialMediaImages}>
      {image.map((img) => (
        <FooterSocialMediaImage img={img} />
      ))}
    </div>
  );
};
