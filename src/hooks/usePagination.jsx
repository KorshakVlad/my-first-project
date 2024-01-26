import { useState } from "react";

const usePagination = ({ itemsInPage, itemArray }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(itemArray.length / itemsInPage);
  const [itemsPerPage] = useState(itemsInPage);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItem = itemArray.slice(firstItemIndex, lastItemIndex);

  const nextPage = (pageNumber) => {
    if (pageNumber === totalPages) {
      return;
    }
    setCurrentPage((prev) => prev + 1);
  };

  const lastPage = (pageNumber) => {
    if (pageNumber === 1) {
      return;
    }
    setCurrentPage((prev) => prev - 1);
  };

  return {
    setCurrentPage,
    currentItem,
    currentPage,
    totalPages,
    nextPage,
    lastPage,
  };
};

export default usePagination;
