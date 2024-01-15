import className from '../footer.module.scss'
import {FooterPagesBlock} from "./FooterPagesBlock.jsx";

export const FooterPages = () => {

    //TODO map or object
    const home = ['Hero Section', 'Features', 'Properties', 'Testimonials', "FA'Qs"]
    const aboutUs = ['Our Story', 'Our works', 'How it Works', 'Our Team', "Our Clients"]
    const properties = ['Portfolio', 'Categories']
    const contactUs = ['Contact Form', 'Our Offices']
    const services = ['Valuation Mastery', 'Strategic Marketing', 'HNegotiation Wizardry', 'Closing Success', 'Property Management']

    return (
        <div className={className.footerPages}>
            <FooterPagesBlock array={home}/>
            <FooterPagesBlock array={aboutUs}/>
            <FooterPagesBlock array={properties}/>
            <FooterPagesBlock array={contactUs}/>
            <FooterPagesBlock array={services}/>
        </div>
    )
}