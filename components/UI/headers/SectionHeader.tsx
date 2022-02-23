interface ISectionHeader {
  text: string;
}

const SectionHeader = ({ text }: ISectionHeader) => (
  <div className="w-full pb-6">
    <div className="pb-5 border-b border-gray-700">
      <h3 className="text-lg leading-6 font-medium text-gray-900">{text}</h3>
    </div>
  </div>
);

export default SectionHeader;
