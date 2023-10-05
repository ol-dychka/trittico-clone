import { SelectedPage } from "../../shared/types";
import Link from "./Link";
import logo from "../../assets/logo.svg";
import logoMobile from "../../assets/logo-mobile.svg";
import ButtonArrowAnimated from "../reusable/ButtonArrowAnimated";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useState } from "react";
import { ChevronDoubleDownIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  setFormOpen: () => void;
};
const Navbar = ({ selectedPage, setSelectedPage, setFormOpen }: Props) => {
  const isAboveLg = useMediaQuery("(min-width: 1024px)");
  const [isOpen, setIsOpen] = useState(false);

  if (isAboveLg)
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

  // MOBILE VIEW
  return (
    <div>
      <div className="fixed top-5 z-10 w-[90vw] pl-[10vw]">
        <div
          className={`relative flex w-auto items-center justify-center ${
            isOpen ? "rounded-t-md" : "rounded-md"
          } bg-black py-3 text-white`}
        >
          <img src={logoMobile} alt="logo" width="170px" />

          <div
            className="absolute left-3 cursor-pointer text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="h-4 w-4" />
            ) : (
              <ChevronDoubleDownIcon className="h-4 w-4" />
            )}
          </div>
        </div>

        {/* DROPDOWN MOBILE MENU */}
        {isOpen && (
          <div className="flex flex-wrap justify-center rounded-b-md bg-black px-4 py-1 text-white hover:text-gray-medium">
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
        )}
      </div>

      {/* BOTTOM BUTTON */}
      <div className="fixed bottom-5 right-5 z-10">
        <ButtonArrowAnimated text="PRE-ORDER NOW" onClick={setFormOpen} />
      </div>
    </div>
  );
};
export default Navbar;
