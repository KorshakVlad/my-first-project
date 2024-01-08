import className from './blackButton.module.scss/'

const BlackButton = (props) =>{
    return(
        <>
            <button className={className.blackButton}>
                {props.name}
            </button>
    </>
    )
}

export default BlackButton;