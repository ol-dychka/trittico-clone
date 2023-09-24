import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import PageTemplate from "../reusable/PageTemplate";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Handlebar = ({ setSelectedPage }: Props) => {
  return (
    <section id={SelectedPage.Handlebar}>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Handlebar)}
      >
        <PageTemplate
          inverted
          image="../../assets/images/handlebar.png"
          video="../../assets/video/handlebar-vid.mp4"
          videoTitle="Ergonomics"
          videoText="Smart Fit incision and Precision Fit."
          title="TRITTICO HANDLEBAR"
          text="An ergonomic carbon fiber performance handlebar designed specifically for the characteristics of contemporary road racing. Used in conjunction with the Trittico cockpit system it offers market-leading performance combined with sophisticated Italian aesthetics and integrated cable routing."
        />
      </motion.div>
    </section>
  );
};
export default Handlebar;
