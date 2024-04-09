import IMG from "../../assets/Content.png";

type Props = {
  span: String;
};

const Card = ({ span }: Props) => {
  return (
    <div
      className={`bg-white h-[498px] overflow-hidden p-8 rounded-3xl border border-gray-100 ${span}`}
    >
      <div>
        <h6 className="text-xl font-semibold text-gray-900 mb-2">
          Hyper-manage Operations with rich analytics
        </h6>
        <p className="font-medium text-gray-400">
          Derive actionable insights, create custom reports and dashboards, and
          measure operations in real time to drive growth in a sustainable
          manner.
        </p>
      </div>
      <div className="mt-8">
        <img src={IMG} alt="" />
      </div>
    </div>
  );
};

export default Card;
