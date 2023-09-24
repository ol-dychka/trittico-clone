import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import { ArrowSmallLeftIcon } from "@heroicons/react/24/solid";

type Props = {
  onClick: () => void;
  isLeft?: boolean;
};
const ButtonPhotoArrow = ({ onClick, isLeft = false }: Props) => {
  return (
    <div
      className="cursor-pointer rounded-md bg-black p-3 transition duration-200 hover:bg-green"
      onClick={onClick}
    >
      {isLeft ? (
        <ArrowSmallLeftIcon className="h-6 w-6 text-white" />
      ) : (
        <ArrowSmallRightIcon className="h-6 w-6 text-white" />
      )}
    </div>
  );
};
export default ButtonPhotoArrow;
