type Props = {
  name: string;
  desc: string;
};
const Feature = ({ name, desc }: Props) => {
  return (
    <>
      <div className="flex justify-between py-6">
        <p className="text-xs font-medium text-gray-medium">{name}</p>
        <p className="text-xs font-medium">{desc}</p>
      </div>
      <div className="h-px w-full bg-gray-light" />
    </>
  );
};
export default Feature;
