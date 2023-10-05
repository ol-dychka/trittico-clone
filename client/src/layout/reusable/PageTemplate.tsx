import useMediaQuery from "../../hooks/useMediaQuery";
import DiscoverMore from "./DiscoverMore";

type Props = {
  inverted?: boolean;
  image: string;
  video: string;
  videoTitle: string;
  videoText: string;
  title: string;
  text: string;
};
const PageTemplate = ({
  inverted = false,
  image,
  video,
  videoTitle,
  videoText,
  title,
  text,
}: Props) => {
  const isAboveMobile = useMediaQuery("(min-width:768px)");

  return (
    <div className="mb-36 w-full px-4 py-4">
      <div
        className={`md:flex ${
          inverted ? "flex-row-reverse" : "flex-row"
        } justify-between`}
      >
        <div
          className={`${
            isAboveMobile ? (inverted ? "ml-3" : "mr-3") : ""
          } flex basis-1/3 flex-col justify-between`}
        >
          <div className="relative">
            <video
              width="100%"
              muted
              autoPlay
              loop
              playsInline
              className="rounded-lg"
            >
              <source src={video} />
            </video>
            <div className="absolute top-0 p-4">
              <p className="text-xl font-medium tracking-wider">{videoTitle}</p>
              <p className="w-2/3 text-sm text-gray-medium">{videoText}</p>
            </div>
          </div>
          <div className="p-4">
            <p className="font-header text-2xl">{title}</p>
            <p className="mb-6 mt-4 text-sm tracking-wide">{text}</p>
            <DiscoverMore />
          </div>
        </div>
        <div className="basis-2/3 rounded-lg bg-gray-light">
          <img src={image} alt="img" height="100%" />
        </div>
      </div>
    </div>
  );
};
export default PageTemplate;
