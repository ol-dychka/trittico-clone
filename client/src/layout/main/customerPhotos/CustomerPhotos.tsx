import { useRef, useState } from "react";
import ButtonPhotoArrow from "./ButtonPhotoArrow";

const CustomerPhotos = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref: React.MutableRefObject<any> = useRef(null);

  const [scrolled, setScrolled] = useState(0);

  const scroll = (offset: number) => {
    if (ref.current) ref.current.scrollLeft += offset;
  };

  const handleScroll = () => {
    setScrolled(ref.current.scrollLeft || 0);
  };

  return (
    // add image gallery
    <div className="mb-24">
      <div className="h-px w-full bg-black" />

      <p className="mt-16 max-w-md pl-4 text-3xl font-medium text-gray-darker">
        Humbly hi-tech:
      </p>
      <p className="mb-16 max-w-md pl-4 text-3xl font-medium text-gray-darker">
        See how the world's best bike builders use Trittico
      </p>

      {/* CONTAINER FORM SCROLLER & BUTTONS */}
      <div className="relative my-4">
        {/* SCROLLER */}
        <div
          className="no-scrollbar w-full overflow-x-auto overflow-y-hidden scroll-smooth"
          onScroll={handleScroll}
          ref={ref}
        >
          {/* IMAGES */}
          <ul className="mx-[20vw] w-[130vw] whitespace-nowrap">
            <li className="mr-[10vw] inline-block w-[60vw]">
              <img
                src="../../assets/images/irl-img2.jpg"
                alt="irl"
                width="100%"
                className="rounded-t-md"
              />
              <div className="flex h-12 w-full items-center rounded-b-md bg-black px-3">
                <p className="text-sm text-white">
                  <b>n° 500</b> by Victoire
                </p>
              </div>
            </li>
            <li className="inline-block w-[60vw]">
              <img
                src="../../assets/images/irl-img1.jpg"
                alt="irl"
                width="100%"
                className="rounded-t-md"
              />
              <div className="flex h-12 w-full items-center rounded-b-lg bg-black px-3">
                <p className="text-sm text-white">io̍klîn frameworks</p>
              </div>
            </li>
          </ul>
        </div>
        {/* BUTTONS */}
        <div className="absolute top-1/2 flex w-full justify-between overflow-hidden px-36">
          <ButtonPhotoArrow onClick={() => scroll(-2000)} isLeft />
          <ButtonPhotoArrow onClick={() => scroll(2000)} />
        </div>
      </div>
      {/* PROGRESS BAR */}
      <div
        className="mx-[20vw] flex h-1"
        style={{
          // justifyContent: scrolled === 0 ? "left" : "right",
          paddingLeft: scrolled / 1.839,
        }}
      >
        <div className="h-full w-[20vw] rounded-sm bg-black" />
      </div>
    </div>
  );
};
export default CustomerPhotos;
