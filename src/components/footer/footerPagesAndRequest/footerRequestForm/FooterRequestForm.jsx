import classNames from './footerRequestForm.module.scss'
import {FooterRequestFormInput} from "./footerRequestFormInput/FooterRequestFormInput.jsx";
import {FooterRequestFormLogo} from "./footerRequestFormLogo/FooterRequestFormLogo.jsx";

export const FooterRequestForm = () => {

    //TODO move out logo - ok
    return (
        <div className={classNames.footerRequestForm}>
            <FooterRequestFormLogo/>
            <FooterRequestFormInput/>
        </div>
    )
}