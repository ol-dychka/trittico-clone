const brands = [
  "jaegher",
  "victoire",
  "festka",
  "passoine",
  "stelbel",
  "condor",
  "belle",
  "ipqor",
  "beach-club",
  "repete",
  "onguza",
  "titici",
  "ioklin",
  "bixxis",
  "cinelli",
];

const Brands = () => {
  return (
    <div className="my-28 flex p-4">
      <div className="basis-5/12">
        <p className="mb-5 text-4xl font-medium">
          The world’s best framebuilders are already using Trittico.
        </p>
        <p className="text-4xl font-medium">
          Get your bike built with Trittico from any of the following brands.
        </p>
      </div>
      <div className="group grid basis-7/12 grid-cols-4 justify-around gap-x-5 gap-y-5">
        {brands.map((brand) => (
          <div className="cursor-pointer rounded-md bg-gray-light transition duration-200 group-hover:opacity-50 group-hover:hover:opacity-100">
            <img
              src={`./src/assets/sponsors/${brand}.png`}
              alt="img"
              height="100%"
              width="100%"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Brands;
