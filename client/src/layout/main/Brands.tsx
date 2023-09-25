import jaegher from "../../assets/sponsors/jaegher.png";
import victoire from "../../assets/sponsors/victoire.png";
import festka from "../../assets/sponsors/festka.png";
import passoine from "../../assets/sponsors/passoine.png";
import stelbel from "../../assets/sponsors/stelbel.png";
import condor from "../../assets/sponsors/condor.png";
import belle from "../../assets/sponsors/belle.png";
import ipqor from "../../assets/sponsors/ipqor.png";
import beachclub from "../../assets/sponsors/beachclub.png";
import repete from "../../assets/sponsors/repete.png";
import onguza from "../../assets/sponsors/onguza.png";
import titici from "../../assets/sponsors/titici.png";
import ioklin from "../../assets/sponsors/ioklin.png";
import bixxis from "../../assets/sponsors/bixxis.png";
import cinelli from "../../assets/sponsors/cinelli.png";

const brands = [
  jaegher,
  victoire,
  festka,
  passoine,
  stelbel,
  condor,
  belle,
  ipqor,
  beachclub,
  repete,
  onguza,
  titici,
  ioklin,
  bixxis,
  cinelli,
];

const Brands = () => {
  return (
    <div className="my-28 p-4 lg:flex">
      <div className="basis-5/12">
        <p className="mb-5 text-4xl font-medium">
          The world’s best framebuilders are already using Trittico.
        </p>
        <p className="mb-5 text-4xl font-medium">
          Get your bike built with Trittico from any of the following brands.
        </p>
      </div>
      <div className="group grid basis-7/12 grid-cols-4 justify-around gap-x-5 gap-y-5 md:grid-cols-6 lg:grid-cols-4 xl:grid-cols-6">
        {brands.map((brand) => (
          <div
            key={brand.toString()}
            className="cursor-pointer rounded-md bg-gray-light transition duration-200 group-hover:opacity-50 group-hover:hover:opacity-100"
          >
            <img src={brand} alt="img" height="100%" width="100%" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Brands;
