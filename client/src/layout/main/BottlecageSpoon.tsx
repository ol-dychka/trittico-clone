import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import DiscoverMore from "../reusable/DiscoverMore";
import raceSpoon from "../../assets/images/race-spoon.png";
import bottlecage from "../../assets/images/bottlecage.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const BottlecageSpoon = ({ setSelectedPage }: Props) => {
  return (
    <section id={SelectedPage.BottlecageSpoon}>
      <motion.div
        className="w-full px-4 py-4"
        onViewportEnter={() => setSelectedPage(SelectedPage.BottlecageSpoon)}
      >
        <div className="grid grid-cols-3 grid-rows-2 gap-3">
          <div className="col-span-1 rounded-lg bg-gray-light">
            <img src={raceSpoon} alt="img" height="100%" />
          </div>
          <div className="col-span-2 rounded-lg bg-gray-light">
            <img src={bottlecage} alt="img" height="100%" />
          </div>
          <div className="col-span-1 p-4">
            <p className="font-header text-2xl">
              TRITTICO BOTTLECAGE & RACE SPOON
            </p>
            <p className="mb-6 mt-4 text-sm tracking-wide">
              Hyper-minimal designer accessories to complete your Trittico kit,
              made from carbon fiber, Titanium hardware and CNC'd 6061 T6
              aluminium.
            </p>
            <DiscoverMore discover="THE BOTTLECAGE" />
            <DiscoverMore discover="THE RACE SPOON" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default BottlecageSpoon;
