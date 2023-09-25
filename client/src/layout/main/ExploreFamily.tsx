import ButtonArrowAnimated from "../reusable/ButtonArrowAnimated";
import collection from "../../assets/images/collection.png";

const ExploreFamily = () => {
  return (
    <div className="my-4 w-full p-4">
      <div className="items-center overflow-hidden rounded-lg bg-gray-dark lg:flex">
        <div className="my-4 ml-4 basis-3/5 lg:my-0">
          <p className="mb-12 text-4xl font-medium text-white">
            Explore the full Trittico family
          </p>
          <ButtonArrowAnimated text="DISCOVER MORE" />
        </div>
        <div className="flex h-full basis-2/5 justify-center bg-gray-light">
          <img src={collection} alt="img" className="h-96 object-cover" />
        </div>
      </div>
    </div>
  );
};
export default ExploreFamily;
