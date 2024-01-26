import className from "./paginationButton.module.scss";

export const PaginationButton = ({
  buttonImage,
  buttonHandler,
  currentPage,
}) => {
  return (
    <button
      onClick={() => buttonHandler(currentPage)}
      className={className.paginationButton}
    >
      <img className={className.paginationButtonsImage} src={buttonImage} />
    </button>
  );
};
