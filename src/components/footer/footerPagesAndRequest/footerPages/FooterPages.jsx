import className from "./footerPages.module.scss";
import { FooterPagesBlock } from "./footerPagesBlock/FooterPagesBlock.jsx";
import { pages } from "../../../../constants/footerPagesData.js";

export const FooterPages = () => {
  //TODO map or object

  return (
    <nav className={className.footerPages}>
      {pages.map((page) => (
        <FooterPagesBlock page={page} />
      ))}
    </nav>
  );
};
