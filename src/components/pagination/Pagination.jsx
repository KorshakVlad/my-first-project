import className from "./pagination.module.scss";
import nextPageImg from "../../images/nextPage.png";
import lastPageImg from "../../images/lastPage.svg";
import { PaginationButton } from "./paginationButton/PaginationButton.jsx";
export const Pagination = ({
  setCurrentPage,
  currentPage,
  totalPages,
  lastPage,
  nextPage,
}) => {
  const buttons = [
    {
      image: lastPageImg,
      buttonHandler: lastPage,
    },
    {
      image: nextPageImg,
      buttonHandler: nextPage,
    },
  ];

  return (
    <div className={className.pagination}>
      <div>
        <p className={className.paginationButtonsText}>
          {currentPage} of {totalPages}
        </p>
      </div>
      <div className={className.paginationButtons}>
        {buttons.map((item) => (
          <PaginationButton
            buttonImage={item.image}
            buttonHandler={item.buttonHandler}
            currentPage={currentPage}
          />
        ))}
      </div>
    </div>
  );
};
