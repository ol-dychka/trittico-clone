import ButtonArrowAnimated from "../reusable/ButtonArrowAnimated";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";

type Props = {
  setFormOpen: () => void;
};

const Footer = ({ setFormOpen }: Props) => {
  return (
    <div className="bg-black px-4 pb-16 pt-24">
      <div className="mb-12 flex justify-between">
        <div>
          <img
            src=".\src\assets\images\footer-logo.png"
            alt="logo"
            className="mb-4 h-10"
          />
          <p className="max-w-md text-sm text-white">
            Founded in Milan in 1919, Columbus has for over 100 years produced
            the highest quality tubes in the world for building steel, titanium
            and aluminium racing performance bicycles. Today Columbus represents
            the seal of quality trusted by riders and chosen by framebuilders
            seeking the highest quality and technology available on the market,
            be it for metal tubing or carbon fiber components.
          </p>
        </div>
        <div>
          <p className="mb-4 max-w-md text-3xl font-medium text-white">
            Subscribe to the official Columbus mailing list
          </p>
          <p className="mb-8 max-w-md text-sm text-white">
            Be the first to receive updates about our latest products and
            activities!
          </p>
          <ButtonArrowAnimated text="SIGN-UP NOW" onClick={setFormOpen} />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex justify-between gap-4 text-xs text-gray-medium">
          <p>© 2023 COPYRIGHT COLUMBUS - GRUPPO SRL - P.IVA 12007070159</p>
          <p className="cursor-pointer underline transition duration-300 hover:text-white">
            COOKIE POLICY
          </p>
          <p className="cursor-pointer underline transition duration-300 hover:text-white">
            PRIVACY POLICY
          </p>
          <p className="cursor-pointer underline transition duration-300 hover:text-white">
            PRIVACY PREFERENCES
          </p>
        </div>
        <div className="flex justify-between gap-4">
          <img
            src={facebook}
            alt="logo"
            width="11px"
            height="20px"
            className="cursor-pointer"
          />
          <img
            src={instagram}
            alt="logo"
            width="22px"
            height="22px"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
export default Footer;
