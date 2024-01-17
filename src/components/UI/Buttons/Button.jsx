import "./button.scss";

const Button = ({ style, text }) => {
  return (
    <>
      <button className={style}>{text}</button>
    </>
  );
};

export default Button;
