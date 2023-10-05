import { Spec } from "../../../shared/types";

type Props = {
  specs: Spec[];
};
const SpecsTable = ({ specs }: Props) => {
  return (
    <div>
      {specs.map((spec, i, { length }) => (
        <div key={spec.title}>
          <div className="justify-between gap-2 py-6 md:flex">
            <p className="min-w-min text-xl text-white">{spec.title}</p>
            <p className="mt-1.5 text-sm text-gray-medium">{spec.text}</p>
          </div>
          {length - 1 !== i && <div className="h-px bg-gray-dark" />}
        </div>
      ))}
    </div>
  );
};
export default SpecsTable;
