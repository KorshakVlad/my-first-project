import mail from '../../../../../images/mail.svg'
import send from '../../../../../images/send.svg'
import className from './footerRequestFormInput.module.scss'
export const FooterRequestFormInput = () =>{
    //TODO replace inline styles

    return(
        <div className={className.footerRequestFormInput}>
            <span className={className.footerRequestInputSpan}>
                <img src={mail}/>
                <input placeholder='Enter Your Email' className={className.footerRequestInput}/>
            </span>
            <img src={send}/>
        </div>
    )
}