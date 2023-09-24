const PhotoHeader = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-dark">
      <img
        src="./src/assets/images/header.png"
        alt="header"
        height="50%"
        className="object-contain"
      />
      <div className="absolute top-1/3 w-full px-4">
        <div className="mt-8 flex justify-between">
          <p className="max-w-lg text-white">
            Design-driven performance cycling components, tuned specifically for
            handmade and bespoke bicycles.
          </p>
          <p className="font-header text-6xl text-white">TRITTICO</p>
        </div>
        <video
          width="500"
          muted
          autoPlay
          loop
          playsInline
          className="mt-4 rounded-lg"
        >
          <source src="./src/assets/video/header-vid.mp4" />
        </video>
      </div>
    </div>
  );
};
export default PhotoHeader;
