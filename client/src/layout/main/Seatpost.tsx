import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import PageTemplate from "../reusable/PageTemplate";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Seatpost = ({ setSelectedPage }: Props) => {
  return (
    <section id={SelectedPage.Seatpost}>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Seatpost)}
      >
        <PageTemplate
          image="../../assets/images/seatpost.png"
          video="../../assets/video/seatpost-vid.mp4"
          videoTitle="Dual Offset System"
          videoText="15/25mm variation for micro fit-adjustments."
          title="TRITTICO SEATPOST"
          text="With a patent-pending micro-adjustment system, the Trittico seatpost offers high performance combined with exceptional ease-of-use in maintenance and micro fit adjustments."
        />
      </motion.div>
    </section>
  );
};
export default Seatpost;
