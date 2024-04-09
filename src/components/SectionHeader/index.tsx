type Props = {
  callout: String;
  heading: String;
  subtext: String;
};
const SectionHeader = ({ callout, heading, subtext }: Props) => {
  return (
    <div className="container">
      <div className="w-full flex flex-col text-center gap-3">
        {callout && (
          <span className="text-sm lg:text-base font-bold text-gray-400 ">
            {callout}
          </span>
        )}
        <h2>{heading}</h2>
        {subtext && (
          <p className="text-lg lg:text-xl font-medium text-gray-400 md:max-w-[628px] mx-auto mt-2">
            {subtext}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
