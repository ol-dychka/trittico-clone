import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import PageTemplate from "../reusable/PageTemplate";
import fork from "../../assets/images/fork.png";
import forkVid from "../../assets/video/fork-vid.mp4";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Fork = ({ setSelectedPage }: Props) => {
  return (
    <section id={SelectedPage.Fork}>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Fork)}>
        <PageTemplate
          inverted
          image={fork}
          video={forkVid}
          videoTitle="Precise Driving"
          videoText="Market-leading frontal and lateral rigidity."
          title="TRITTICO FORK"
          text="A patented steerer section allows for Columbus’ top-of-the-range road fork to bring integrated cable routing to 1-1/8” steerer diameters favoured by the world’s leading framebuilders."
        />
      </motion.div>
    </section>
  );
};
export default Fork;
