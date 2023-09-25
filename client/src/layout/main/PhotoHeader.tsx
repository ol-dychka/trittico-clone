import headerVid from "../../assets/video/header-vid.mp4";
import header from "../../assets/images/header.png";
import headerMobile from "../../assets/images/header-img.png";
import useMediaQuery from "../../hooks/useMediaQuery";

const PhotoHeader = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1210px)");

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-dark">
      <img
        src={isAboveLarge ? header : headerMobile}
        alt="header"
        width="100%"
        className="object-contain"
      />
      <div className="absolute top-1/3 w-full px-4">
        <div className="mt-8 flex-row-reverse justify-between lg:flex">
          <p className="mb-4 font-header text-6xl text-white">TRITTICO</p>
          <p className="max-w-lg text-white">
            Design-driven performance cycling components, tuned specifically for
            handmade and bespoke bicycles.
          </p>
        </div>
        <video
          width="500"
          muted
          autoPlay
          loop
          playsInline
          className="mt-12 rounded-lg"
        >
          <source src={headerVid} />
        </video>
      </div>
    </div>
  );
};
export default PhotoHeader;
