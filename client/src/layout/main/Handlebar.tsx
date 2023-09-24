import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import PageTemplate from "../reusable/PageTemplate";
import handlebar from "../../assets/images/handlebar.png";
import handlebarVid from "../../assets/video/handlebar-vid.mp4";

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
          image={handlebar}
          video={handlebarVid}
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
