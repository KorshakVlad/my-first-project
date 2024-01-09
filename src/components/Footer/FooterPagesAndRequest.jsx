import className from './footer.module.scss'
import {FooterPages} from "./FooterPages/FooterPages.jsx";
import {FooterRequest} from "./FooterRequet/FooterRequest.jsx";

const FooterPagesAndRequest = () => {
    return (
        <div className={className.footerPagesAndRequest}>
            <FooterRequest/>
            <FooterPages/>
        </div>
    )
}

export default FooterPagesAndRequest;