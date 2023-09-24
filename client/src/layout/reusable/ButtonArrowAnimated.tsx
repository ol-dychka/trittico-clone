import { ArrowSmallRightIcon } from "@heroicons/react/20/solid";

type Props = {
  text: string;
  isDark?: boolean;
  onClick?: () => void;
  submit?: boolean;
};
const ButtonArrowAnimated = ({
  text,
  isDark = false,
  onClick = () => {},
  submit = false,
}: Props) => {
  const bgAndText = isDark ? "bg-black text-white" : "bg-gray-light";
  return (
    <button
      type={submit ? "submit" : "button"}
      className={`${bgAndText} flex items-center gap-1 rounded-md p-3 shadow-black transition-all duration-200 hover:gap-0 hover:bg-green hover:pr-4 hover:text-white hover:drop-shadow-2xl`}
      onClick={onClick}
    >
      <p className="text-xs font-medium">{text}</p>
      <ArrowSmallRightIcon className="h-5 w-5" />
    </button>
  );
};
export default ButtonArrowAnimated;
