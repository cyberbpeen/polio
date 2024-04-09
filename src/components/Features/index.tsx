import Card from "./Card";

const Features = () => {
  return (
    <section className="py-16 xl:py-24 bg-gray-25">
      <div className="container">
        <div className="w-full flex flex-col text-center gap-3">
          <span className="text-sm lg:text-base font-bold text-gray-400 ">
            Features
          </span>
          <h2>The CRM that’s truly your own</h2>
          <p className="text-lg lg:text-xl font-medium text-gray-400 md:max-w-[628px] mx-auto mt-2">
            Engage with your customers through the right channel at the right
            time and with the right message.
          </p>
        </div>
      </div>
      <div className="container mt-16">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card span="lg:col-span-2" />
          <Card span="lg:col-span-1" />
          <Card span="lg:col-span-1" />
          <Card span="lg:col-span-2" />
        </div>
      </div>
    </section>
  );
};

export default Features;
