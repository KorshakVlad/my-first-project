import className from './purpleButton.module.scss'

const MyComponent = (props) => {
    return (
        <>
            <button className={className.purpleButton}>
                {props.name}
            </button>
        </>
    );
};

export default MyComponent;
