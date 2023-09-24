import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import PageTemplate from "../reusable/PageTemplate";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Stem = ({ setSelectedPage }: Props) => {
  return (
    <section id={SelectedPage.Stem}>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Stem)}>
        <PageTemplate
          image="./src/assets/images/stem.png"
          video="./src/assets/video/stem-vid.mp4"
          videoTitle="Sleeve Variations"
          videoText="Black Tuning for a 0 / +5mm variation or Red Tuning for a -5° variation."
          title="TRITTICO STEM"
          text="With a refined Italian minimilast design aesthetic, combined with latest generation performance and integration as well as a proprietary micro-tuning fit system, the Trittico stem is the obvious choice for your new handmade frame or an exclusive upgrade to your existing cockpit system."
        />
      </motion.div>
    </section>
  );
};
export default Stem;
