import className from "./footerPagesBlock.module.scss";

export const FooterPagesBlock = ({ page }) => {
  return (
    <div className={className.footerPagesBlock}>
      <h4 className={className.footerPagesLinkName}>{page.pageName}</h4>
      {page.sectionName.map((item) => {
        return (
          <a className={className.footerPagesLink} href={"*"}>
            {item}
          </a>
        );
      })}
    </div>
  );
};
