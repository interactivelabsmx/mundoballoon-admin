interface ILabelBase {
  htmlFor: string;
  label: string;
}

const LabelBase = ({ htmlFor, label }: ILabelBase) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
    {label}
  </label>
);

export default LabelBase;
