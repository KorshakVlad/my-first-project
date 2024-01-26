import className from "./featuredProperties.module.scss";
import { FeaturedPropertiesText } from "./featuredPropertiesText/featuredPropertiesText.jsx";
import { FeaturedPropertiesButton } from "./featuredPropertiesButton/featuredPropertiesButton.jsx";
import { FeaturedPropertiesCards } from "./featuredPropertiesCards/FeaturedPropertiesCards.jsx";
import { Pagination } from "../pagination/Pagination.jsx";
import usePagination from "../../hooks/usePagination.jsx";
import { featuredProperties } from "../../constants/featuredPropertiesCards.js";

export const FeaturedProperties = () => {
  const {
    setCurrentPage,
    currentItem,
    currentPage,
    totalPages,
    nextPage,
    lastPage,
  } = usePagination({
    itemsInPage: 3,
    itemArray: featuredProperties,
  });

  return (
    <article className={className.featuredProperties}>
      <header className={className.featuredPropertiesHeader}>
        <FeaturedPropertiesText />
        <FeaturedPropertiesButton />
      </header>
      <article className={className.featuredPropertiesContent}>
        <FeaturedPropertiesCards featuredProperties={currentItem} />
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          nextPage={nextPage}
          lastPage={lastPage}
        />
      </article>
    </article>
  );
};
