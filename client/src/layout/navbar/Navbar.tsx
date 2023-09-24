import { SelectedPage } from "../../shared/types";
import Link from "./Link";
import logo from "../../assets/logo.svg";
import ButtonArrowAnimated from "../reusable/ButtonArrowAnimated";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  setFormOpen: () => void;
};
const Navbar = ({ selectedPage, setSelectedPage, setFormOpen }: Props) => {
  return (
    <div className="fixed top-5 z-10 flex w-full items-center justify-between px-4">
      <img
        src={logo}
        alt="logo"
        width="124px"
        height="32px"
        className="mix-blend-difference"
      />

      <div className="flex justify-center rounded-md bg-black px-4 py-1 text-white hover:text-gray-medium">
        <Link
          page={SelectedPage.Overview}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page={SelectedPage.Stem}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page={SelectedPage.Handlebar}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page={SelectedPage.Seatpost}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page={SelectedPage.Fork}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page={SelectedPage.BottlecageSpoon}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page={SelectedPage.Specs}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>

      <ButtonArrowAnimated text="PRE-ORDER NOW" onClick={setFormOpen} />
    </div>
  );
};
export default Navbar;
