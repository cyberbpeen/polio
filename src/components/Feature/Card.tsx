type Props = {
  title: String;
  description: String;
  icon: any;
};

const Card = ({ title, description, icon }: Props) => {
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full">
        {icon}
      </div>
      <div>
        <h6 className="text-xl font-semibold text-gray-900">{title}</h6>
        <p className="font-medium text-gray-400 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
