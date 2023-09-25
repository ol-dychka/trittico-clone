import { Spec } from "../../../shared/types";

type Props = {
  specs: Spec[];
};
const SpecsTable = ({ specs }: Props) => {
  return (
    <div>
      {specs.map((spec, i, { length }) => (
        <div key={spec.title}>
          <div className="flex py-6">
            <p className="w-1/3 text-xl text-white">{spec.title}</p>
            <p className="mt-1.5 w-2/3 whitespace-pre-wrap text-sm text-gray-medium">
              {spec.text}
            </p>
          </div>
          {length - 1 !== i && <div className="h-px bg-gray-dark" />}
        </div>
      ))}
    </div>
  );
};
export default SpecsTable;
