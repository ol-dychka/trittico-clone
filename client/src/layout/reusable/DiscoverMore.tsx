import { ArrowSmallRightIcon } from "@heroicons/react/20/solid";

type Props = {
  discover?: string;
};
const DiscoverMore = ({ discover = "MORE" }: Props) => {
  return (
    <div className="mt-3 w-fit cursor-pointer">
      <div className="flex w-auto items-center gap-1 transition-all duration-200 hover:gap-0 hover:pr-1">
        <p className="text-xs font-medium tracking-wider">
          DISCOVER {discover}
        </p>
        <ArrowSmallRightIcon className="h-5 w-5" />
      </div>
      <div className="h-px bg-black" />
    </div>
  );
};
export default DiscoverMore;
