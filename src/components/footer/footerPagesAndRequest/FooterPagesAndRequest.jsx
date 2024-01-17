import className from "./footerPagesAndRequest.module.scss";
import { FooterPages } from "./footerPages/FooterPages.jsx";
import { FooterRequestForm } from "./footerRequestForm/FooterRequestForm.jsx";

const FooterPagesAndRequest = () => {
  return (
    <div className={className.footerPagesAndRequest}>
      <FooterRequestForm />
      <FooterPages />
    </div>
  );
};

export default FooterPagesAndRequest;
