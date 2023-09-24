import ButtonArrowAnimated from "../reusable/ButtonArrowAnimated";

const GetInTouch = () => {
  return (
    <div className="flex h-[532px] items-center justify-between bg-gray-light px-4">
      <div className="basis-1/2">
        <p className="mb-4 text-4xl font-medium">
          Are you a rider or framebuilder interested in using Trittico on your
          bicycle?
        </p>
        <p className="mb-12 text-4xl font-medium">Get in touch!</p>
        <ButtonArrowAnimated text="PRE-ORDER NOW" isDark />
      </div>
      <div className="relative h-full basis-1/2">
        <img
          src="..\..\assets\images\get-in-touch.png"
          alt="img"
          className="absolute bottom-0"
        />
      </div>
    </div>
  );
};
export default GetInTouch;
