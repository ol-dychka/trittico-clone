import ButtonArrowAnimated from "../reusable/ButtonArrowAnimated";
import getInTouch from "../../assets/images/get-in-touch.png";

const GetInTouch = () => {
  return (
    <div className=" items-center justify-between bg-gray-light p-4 pb-0 md:flex md:h-[532px]">
      <div className="basis-1/2">
        <p className="mb-4 text-4xl font-medium">
          Are you a rider or framebuilder interested in using Trittico on your
          bicycle?
        </p>
        <p className="mb-12 text-4xl font-medium">Get in touch!</p>
        <ButtonArrowAnimated text="PRE-ORDER NOW" isDark />
      </div>
      <div className="relative h-full basis-1/2">
        <img src={getInTouch} alt="img" className="bottom-0 md:absolute" />
      </div>
    </div>
  );
};
export default GetInTouch;
