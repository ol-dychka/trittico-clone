import { motion } from "framer-motion";
import { SelectedPage } from "../../../shared/types";
import DiscoverMore from "../../reusable/DiscoverMore";
import Feature from "./Feature";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Overview = ({ setSelectedPage }: Props) => {
  return (
    <section id={SelectedPage.Overview}>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Overview)}
      >
        <div className="w-full px-4 py-36">
          <div className="justify-between xl:flex">
            <div className="basis-1/2">
              <p className="text-5xl font-medium leading-tight">
                High performance, intuitive micro-tuning, minimalist Italian
                design
              </p>
              <p className="mb-8 mt-4 text-sm font-medium leading-normal">
                Trittico is a new family of carbon fiber bicycle cockpit
                components designed by the Columbus Technical Office. All
                Trittico components are characterized by state-of-the-art
                performance, weight, reliability and intuitive micro-tuning
                characteristics, facilitated by two new registered patents.
                Trittico have been specifically designed with aesthetic
                qualities and performance charactertistics that complement and
                enhance the artisanal work of your bicycle’s framebuilder as
                well as its specific ride qualities, rather than distract from,
                or compete with, it.
              </p>
              <DiscoverMore discover="THE TRITTICO FAMILY" />
            </div>
            <div className="basis-2/5">
              <Feature
                name="COMPONENTS"
                desc="HANDLEBAR, STEM, SEATPOST, BOTTLE CAGE"
              />
              <Feature
                name="MATERIALS"
                desc="FULL CARBON MONOCOQUE, CNC ALUMINIUM, TITANIUM PARTS"
              />
              <Feature
                name="FINE TUNING"
                desc="UP TO 15MM IN LENGTH, 5° IN ANGLE (SEATPOST + STEM)"
              />
              <Feature
                name="CABLE ROUTING"
                desc="FULLY INTEGRATED ON 1-1/8” HEADSETS"
              />
              <Feature
                name="ERGONOMICS"
                desc="MULTIPLE FEATURES AND POSITIONS (HANDLEBAR)"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Overview;
