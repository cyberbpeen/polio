import HERO from "../../assets/Content.png";
import Button from "../Button";
const Hero = () => {
  return (
    <section className="pt-16 pb-10 xl:pt-24">
      <div className="container">
        <div className="w-full flex flex-col text-center gap-6 items-center justify-center">
          <h1>Manage your customers using AI</h1>
          <p className="text-lg font-medium text-gray-400 md:max-w-[628px]">
            Powerful, flexible and data-driven, Polio makes it easy to build the
            exact CRM your business needs.
          </p>

          <div className="inline-flex gap-8 items-center mt-6">
            <Button variant="secondary">Demo</Button>
            <Button variant="primary">Start for Free</Button>
          </div>
        </div>
      </div>
      <div className="container mt-16">
        <img src={HERO} className="w-full shadow-img rounded-2xl" />
      </div>
    </section>
  );
};

export default Hero;
