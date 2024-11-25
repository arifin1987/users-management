import { FiArrowRightCircle } from "react-icons/fi";

const PriceOption = ({ option }) => {
  const { price, name, features } = option;
  return (
    <div className="flex flex-col bg-blue-500 rounded p-6 text-white">
      <h2 className="text-center py-4">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-2xl">/month</span>
      </h2>
      <p className="text-center text-white text-2xl my-2">{name}</p>
      <div className="flex-grow">
        {features.map((feature, idx) => (
          <p key={idx} className="flex items-center gap-2">
            <FiArrowRightCircle className="text-green-800" />
            {feature}
          </p>
        ))}
      </div>

      <button className="bg-green-600 p-4 mt-4 w-full font-bold rounded hover:bg-red-500">
        View All
      </button>
    </div>
  );
};

export default PriceOption;
