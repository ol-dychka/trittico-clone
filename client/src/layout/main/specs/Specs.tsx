import { useState } from "react";
import { SelectedPage, Spec, Tab } from "../../../shared/types";
import SpecsTable from "./SpecsTable";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const specs: Map<Tab, Spec[]> = new Map();
specs.set(Tab.RaceSpoon, [
  new Spec("Sizes", "One Size"),
  new Spec("Material", "CNC Machine 6061-T6 Aluminium"),
  new Spec("Weight", "53g"),
  new Spec("Max load", "250g"),
  new Spec("Compatibility", "Garmin, Adapter compatible"),
]);
specs.set(Tab.Stem, [
  new Spec("Sizes", "Sleeve 0mm: 90mm – 100mm – 110mm – 120mm – 130mm"),
  new Spec("Angle", "-8°"),
  new Spec("Weight", "177g for the 110mm size"),
  new Spec(
    "Adjustment Sleeve +5mm",
    "Resulting lenght: 95mm – 105mm – 115mm – 125mm – 135mm",
  ),
  new Spec("Adjustment Sleeve -5°", "Resulting angle: -13°"),
]);
specs.set(Tab.Handlebar, [
  new Spec("Sizes", "40cm – 42cm - 44cm"),
  new Spec(
    "Width",
    "Hoods: 40cm – 42cm – 44cm\nDrops: 42,7cm – 44,7cm – 46,7cm",
  ),
  new Spec("Clamp Diameter", "31,8mm"),
  new Spec("Reach", "71mm"),
  new Spec("Drop", "128mm"),
  new Spec("Outsweep", "4°"),
  new Spec("Weight", "243g"),
]);
specs.set(Tab.Seatpost, [
  new Spec("Diameters", "27,2mm – 31,6mm"),
  new Spec("Length", "350mm"),
  new Spec("Weight", "182g for the 27,2mm size"),
  new Spec("Variable offset", "15/25mm"),
  new Spec(
    "Features",
    "Asimmetrical seat-mast wall thickness\n45° lower edge cut for weight reduction and stress distribution\nM5 tightening bolts",
  ),
]);
specs.set(Tab.Fork, [
  new Spec("Finishing", "UD, Columbus painted"),
  new Spec("Steerer", "Tapered 1-1/8” – 1-1/2”"),
  new Spec("Steerer lenght", "350mm"),
  new Spec("Axle-to-crown lenght", "367mm"),
  new Spec("Rake", "45mm"),
  new Spec("Crown diameter", "56mm"),
  new Spec("Tire clearance", "Up to 32mm"),
  new Spec("Axle lenght", "E-Thru 12mm (included)"),
  new Spec("Disc clamp", "Flat mount – 160 / 180mm max rotor"),
  new Spec("Weight", "392g"),
  new Spec("Recommended expander", "3DTRAABLK"),
  new Spec(
    "Features",
    "Fully integrated cable routing Di2, EPS, eTap AXS only",
  ),
]);
specs.set(Tab.Bottlecage, [
  new Spec("Sizes", "One Size"),
  new Spec("Material", "Carbon fiber/Titanium bolts"),
  new Spec("Weight", "18g"),
  new Spec("Height adjustment range", "25mm"),
]);

const Specs = ({ setSelectedPage }: Props) => {
  const [tab, setTab] = useState<Tab>(Tab.Stem);
  return (
    <section id={SelectedPage.Specs}>
      <motion.div
        className="w-full bg-black px-4 py-28"
        onViewportEnter={() => setSelectedPage(SelectedPage.Specs)}
      >
        <p className="font-header text-2xl text-white">
          TRITTICO TECHNICAL SPECS
        </p>
        <div className="my-16 flex text-gray-medium">
          {Object.keys(Tab).map((t) => (
            <button
              key={t}
              onClick={() => setTab(Tab[t as Tab])}
              className={`p-3 ${
                t === tab ? " border-white text-white" : "border-black"
              } border-b-2 text-xs font-medium transition duration-200`}
            >
              {t
                .replace(/([A-Z])/g, " $1")
                .trim()
                .toUpperCase()}
            </button>
          ))}
        </div>
        <SpecsTable specs={specs.get(tab)!} />
      </motion.div>
    </section>
  );
};
export default Specs;
