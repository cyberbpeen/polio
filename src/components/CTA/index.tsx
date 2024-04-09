import Button from "../Button";
import SectionHeader from "../SectionHeader";

const CTA = () => {
  return (
    <section className="py-16 xl:py-24">
      <SectionHeader
        callout={""}
        heading={"Start your 30-day free trial today"}
        subtext={"Join 1500+ companies today and start growing your business"}
      />
      <div className="container mt-10">
        <div className="w-full flex gap-4 justify-center items-center">
          <Button variant="secondary">Learn more</Button>
          <Button variant="primary">Start for Free</Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
