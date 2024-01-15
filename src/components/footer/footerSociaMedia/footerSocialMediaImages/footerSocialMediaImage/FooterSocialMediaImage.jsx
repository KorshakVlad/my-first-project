import className from './footerSocialMediaImage.module.scss'

export const FooterSocialMediaImage = (props) =>{
    return (
        <div className={className.footerSocialMediaImageContainer}>
            <img src={props.img}/>
        </div>
    )
}