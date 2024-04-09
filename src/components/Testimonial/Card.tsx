const Card = () => {
  return (
    <div className="bg-white flex flex-col gap-6 p-8 border border-gray-100 rounded-3xl">
      <div className="flex gap-3">
        <img
          src="https://t3.ftcdn.net/jpg/06/46/00/00/360_F_646000029_JTtTlIY4MgOhl6U36hjDFsRjzMkRw9d1.jpg"
          className="w-[54px] h-[54px] rounded-full"
        />
        <div className="flex-1">
          <h6 className="text-lg font-semibold text-gray-900">Devon Lane</h6>
          <h6 className="font-medium text-gray-400">Dog Trainer</h6>
        </div>
      </div>
      <p className="text-gray-900 font-medium">
        "We use Polio on a daily basis for several internal processes, and I
        cannot rave enough about them. Incredible flexibility and features
        combined with super intuitive UI."
      </p>
    </div>
  );
};

export default Card;
