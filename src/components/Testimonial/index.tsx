import Card from "./Card";

const Testimonial = () => {
  return (
    <section className="py-16 xl:py-24 bg-gray-25">
      <div className="container">
        <div className="w-full flex flex-col text-center gap-3">
          <span className="text-sm lg:text-base font-bold text-gray-400 ">
            Testimonials
          </span>
          <h2>Loved by builders</h2>
          <p className="text-lg lg:text-xl font-medium text-gray-400 md:max-w-[628px] mx-auto mt-2">
            Polio is the customer relationship management tool for everyone who
            values collaboration.
          </p>
        </div>
      </div>
      <div className="container mt-16">
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <div className="absolute w-full h-[298px] left-0 right-0 bottom-0 bg-gradient-to-b from-gray-100/0 to-gray-25"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
