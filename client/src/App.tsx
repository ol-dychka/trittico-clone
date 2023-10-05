import { useState } from "react";
import Navbar from "./layout/navbar/Navbar";
import { SelectedPage } from "./shared/types";
import Overview from "./layout/main/overview/Overview";
import Stem from "./layout/main/Stem";
import Handlebar from "./layout/main/Handlebar";
import Seatpost from "./layout/main/Seatpost";
import Fork from "./layout/main/Fork";
import BottlecageSpoon from "./layout/main/BottlecageSpoon";
import CustomerPhotos from "./layout/main/customerPhotos/CustomerPhotos";
import Specs from "./layout/main/specs/Specs";
import GetInTouch from "./layout/main/GetInTouch";
import Brands from "./layout/main/Brands";
import ExploreFamily from "./layout/main/ExploreFamily";
import Footer from "./layout/footer/Footer";
import PhotoHeader from "./layout/main/PhotoHeader";
import EmailForm from "./layout/emailForm/EmailForm";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Overview,
  );
  const [formOpen, setFormOpen] = useState<boolean>(false);

  return (
    // ${formOpen ? "overflow-hidden" : ""}
    <div className={`app bg-white`}>
      {formOpen && <EmailForm close={() => setFormOpen(false)} />}
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        setFormOpen={() => setFormOpen(true)}
      />
      <PhotoHeader />
      <Overview setSelectedPage={setSelectedPage} />
      <Stem setSelectedPage={setSelectedPage} />
      <Handlebar setSelectedPage={setSelectedPage} />
      <Seatpost setSelectedPage={setSelectedPage} />
      <Fork setSelectedPage={setSelectedPage} />
      <BottlecageSpoon setSelectedPage={setSelectedPage} />
      <CustomerPhotos />
      <Specs setSelectedPage={setSelectedPage} />
      <GetInTouch setFormOpen={() => setFormOpen(true)} />
      <Brands />
      <ExploreFamily />
      <Footer setFormOpen={() => setFormOpen(true)} />
    </div>
  );
}

export default App;
