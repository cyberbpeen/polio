import AMAZON from "../../assets/Amazon.svg";
import COCACOLA from "../../assets/Coca-Cola.svg";
import FEDEX from "../../assets/FedEx_Express.svg";
import IBM from "../../assets/IBM.svg";
import WALMART from "../../assets/Walmart.svg";
import NIKE from "../../assets/nike.svg";

const SocialProof = () => {
  return (
    <section className="py-16 xl:py-24">
      <div className="container">
        <div className="w-full flex flex-col text-center gap-8">
          <p className="text-gray-400 font-medium mx-auto">
            Trusted by Fortune 500 companies
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 items-center">
            <div className="flex item-center justify-center">
              <img src={WALMART} alt="" />
            </div>
            <div className="flex item-center justify-center">
              <img src={NIKE} alt="" />
            </div>
            <div className="flex item-center justify-center">
              <img src={COCACOLA} alt="" />
            </div>
            <div className="flex item-center justify-center">
              <img src={FEDEX} alt="" />
            </div>
            <div className="flex item-center justify-center">
              <img src={IBM} alt="" />
            </div>
            <div className="flex item-center justify-center">
              <img src={AMAZON} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
