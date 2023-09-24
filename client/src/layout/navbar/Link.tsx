import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../shared/types";

type Props = {
  page: SelectedPage;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};
const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const pageDisplay = page.toUpperCase();

  return (
    <AnchorLink
      className={`${
        page === selectedPage ? "text-gray-medium" : ""
      } p-3 text-xs font-medium transition duration-200 hover:text-white`}
      href={`#${page}`}
      onClick={() => setSelectedPage(page)}
    >
      {pageDisplay}
    </AnchorLink>
  );
};
export default Link;
