import className from '../footer.module.scss'

export const FooterPagesBlock = (props) => {
    return (
        <>
            <div className={className.footerPagesBlock}>
                <h4 className={className.footerPagesLinkName}>Home</h4>
                {props.array.map((item) => {
                    return (
                        <a className={className.footerPagesLink} href={'*'}>{item}</a>
                    )
                })}
            </div>
        </>
    )
}