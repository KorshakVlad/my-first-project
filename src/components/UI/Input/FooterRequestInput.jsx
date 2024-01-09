import mail from '../../../images/mail.svg'
import send from '../../../images/send.svg'
import className from './footerRequestInput.module.scss'
export const FooterRequestInput = () =>{
    return(
        <div className={className.footerRequestInputContainer}>
            <span style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
            }}>
                <img src={mail}/>
                <input placeholder='Enter Your Email' className={className.footerRequestInput}/>
            </span>
            <img src={send}/>
        </div>
    )
}