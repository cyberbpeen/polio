import Card from "./Card";
import { RxCode } from "react-icons/rx";
import { MdOutlineAnalytics } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";

const data = [
  {
    title: "Rich analytics",
    description:
      "Easy data management with a dedicated admin panel and a developer platform to extend what Polio CRM can do.",
    icon: <MdOutlineAnalytics size={24} className="text-gray-600" />,
  },
  {
    title: "24/7 support",
    description:
      "Easy data management with a dedicated admin panel and a developer platform to extend what Polio CRM can do.",
    icon: <BsChatDots size={24} className="text-gray-600" />,
  },
  {
    title: "100+ integrations",
    description:
      "Easy data management with a dedicated admin panel and a developer platform to extend what Polio CRM can do.",
    icon: <RxCode size={24} className="text-gray-600" />,
  },
  {
    title: "24/7 supports",
    description:
      "Easy data management with a dedicated admin panel and a developer platform to extend what Polio CRM can do.",
    icon: <BsChatDots size={24} className="text-gray-600" />,
  },
  {
    title: "100+ integration",
    description:
      "Easy data management with a dedicated admin panel and a developer platform to extend what Polio CRM can do.",
    icon: <RxCode size={24} className="text-gray-600" />,
  },
  {
    title: "Rich analytic",
    description:
      "Easy data management with a dedicated admin panel and a developer platform to extend what Polio CRM can do.",
    icon: <MdOutlineAnalytics size={24} className="text-gray-600" />,
  },
];

const Feature = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {data.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
