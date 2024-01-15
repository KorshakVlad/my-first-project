import className from '../footer.module.scss'

export const FooterPagesBlock = ({array}) => {
    return (
        <>
            <div className={className.footerPagesBlock}>
                <h4 className={className.footerPagesLinkName}>Home</h4>
                {array.map((item) => {
                    return (
                        <a className={className.footerPagesLink} href={'*'}>{item}</a>
                    )
                })}
            </div>
        </>
    )
}