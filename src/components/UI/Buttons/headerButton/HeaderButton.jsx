import className from './headerButton.module.scss'

const HeaderButton =(props) =>{
    return(
        <>
            <button className={className.headerButton}>
                {props.name}
            </button>
        </>
    )
}

export default HeaderButton;